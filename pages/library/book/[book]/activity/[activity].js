import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import classNames from 'classnames';
import { flushSync } from 'react-dom';

const VocabList = [
  {
    definition: 'anybody else (exp.)',
    word: 'anybody',
  },
  {
    definition: 'first year student',
    word: 'freshman',
  },
  {
    definition: 'catch you later (exp.)',
    word: 'bye bye',
  },
];

const ItemTypes = {
  VOCAB_CARD: 'vocabCard',
};

function DropZone({ item, x, y, vocabWordList, handleDrop }) {
  const [{ isOver, canDrop, didDrop }, drop] = useDrop({
    accept: ItemTypes.VOCAB_CARD,
    drop: () => ({ x, y }),
    canDrop: ((canDropItem, monitor) => {
      const filteredList = vocabWordList.filter(listItem =>
        listItem.x === x && listItem.y === y);

      return filteredList.length === 0;
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      didDrop: monitor.didDrop(),
    })
  });

  return (
    <div ref={drop} className={classNames(
      "w-full h-24 cursor-pointer",
      {
        "!bg-system-error": !canDrop && isOver,
        "!bg-system-success": canDrop && isOver,
        "bg-system-warning": canDrop,
      }
    )}>
      {
        vocabWordList.map((vocab, id) => {
          if (vocab.x === x && vocab.y === y) {
            return (
              <Draggable
                key={vocab.word}
                item={vocab}
                handleDrop={handleDrop}
              />
            );
          }
        }).filter(n => n)
      }
    </div>
  );
}

function List1({ vocabDefinitionList, vocabWordList, zone, handleDrop }) {
  return (
    <ul className="w-full basis-1/2 flex flex-col border mr-4">
      <li className="text-xl flex justify-center">Definitions</li>
      {
        vocabDefinitionList.map((item, id) => {
          return (
            <li key={id} className="flex my-4 px-16">
              <div className="basis-1/2">
                {item.definition}
              </div>

              <div className="w-full max-w-[540px] basis-1/2 border">
                <DropZone
                  item={item}
                  x={zone}
                  y={id}
                  vocabWordList={vocabWordList}
                  handleDrop={handleDrop}
                />
              </div>
            </li>
          );
        })
      }
    </ul>
  );
}

function Draggable({ item, handleDrop }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.VOCAB_CARD,
    item: { word: item?.word, x: item?.x, y: item?.y },
    end: (endItem, monitor) => {
      const dropResult = monitor.getDropResult();

      if (!dropResult) {
        console.log('draggabled dropped outside');
        return;
      };

      handleDrop(list => list.map(listItem => {
        if (listItem.word === endItem.word) {
          return {
            ...listItem,
            x: dropResult.x,
            y: dropResult.y,
          };
        }

        return listItem;
      }));
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  return (
    <span
      key={item.word}
      ref={drag}
      className={classNames(
        "w-full h-24 max-w-[540px] flex justify-center items-center cursor-pointer",
        {
          'opacity-0': isDragging,
        }
      )}
    >
      {item.word}
    </span>
  );
}

function List2({ vocabWordList, handleDrop, zone }) {
  const [{ isOver, canDrop, didDrop }, drop] = useDrop({
    accept: ItemTypes.VOCAB_CARD,
    drop: () => ({ x: zone }),
    canDrop: ((canDropItem, monitor) => {
      const filteredList = vocabWordList.filter(listItem =>
        listItem.y === canDropItem.y && listItem.x !== zone);

      return filteredList.length !== 0;
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
      didDrop: monitor.didDrop(),
    })
  });

  return (
    <ul
      ref={drop}
      className={classNames(
        "w-full basis-1/2 flex flex-col items-center border ml-4 px-16",
        {
          "!bg-system-error": !canDrop && isOver,
          "!bg-system-success": canDrop && isOver,
          "bg-system-warning": canDrop,
        }
      )}
    >
      <li className="text-xl flex justify-center">Words</li>
      {
        vocabWordList.map((item, id) => {
          if (item.x === zone) {
            return (
              <li key={item.word} className="w-full h-24 max-w-[540px] my-4 border flex justify-center items-center">
                <Draggable
                  item={item}
                  handleDrop={handleDrop}
                />
              </li>
            );
          }

          return null;
        })
      }
    </ul>
  );
}

function Activity() {
  const router = useRouter();
  const { book, activity } = router.query;

  // gives vocab words an x/y position
  const [vocabWordList, setvocabWordList] = useState(
    VocabList.map((item, id) => (
      {
        ...item,
        x: 1,
        y: id
      }
    ))
  );

  return (
    <div>
      <h2>BookID: {book} - ActivityID: {activity}</h2>

      <DndProvider debugMode={true} backend={HTML5Backend}>
        <div className="flex w-full p-12 select-none">
          <List1
            vocabDefinitionList={vocabWordList}
            vocabWordList={vocabWordList}
            zone={0}
            handleDrop={setvocabWordList}
          />

          <List2
            vocabWordList={vocabWordList}
            zone={1}
            handleDrop={setvocabWordList}
          />
        </div>
      </DndProvider>
    </div>
  );
}

export default Activity;
