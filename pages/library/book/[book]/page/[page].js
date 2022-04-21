import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import {
  faHouseChimney,
  faBook,
  faArrowRightFromBracket,
  faGear,
  faStar as faSolidStar,
  faArrowLeft,
  faArrowRight,
  faHeadphones,
  faCircleChevronUp,
  faCircleChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import ProgressBar from '@/components/progressBar';
import classNames from 'classnames';
import styles from '@/styles/Reader.module.css';

const myBook = [
  {
    // Book Cover and Meta Data
  },
  {
    page: 1,
    pageImage: "/images/honeybee_01.gif",
    pageImageAlt: "honeybee page 1",
    text: "The little honeybee was sad.\n It was weak.\n It could not protect itself from its enemies.",
    textPosition: { row: 3, span: 2 },
    classes: "row-start-3 self-center",
    textBackground: false,
    wordCards: [
      {
        name: "enemies",
        nameJP: "敵",
        type: "noun",
        typeJP: "名詞",
        exampleSentence: "I hate enemies.",
        exampleSentenceJP: "私は敵が嫌いです。",
      },
      {
        name: "Honey Bee",
        nameJP: "蜂",
        type: "noun",
        typeJP: "名詞",
        exampleSentence: "I was stund by the bee!",
        exampleSentenceJP: "蜂に刺されました！",
      },
      {
        name: "Protect",
        nameJP: "守る",
        type: "verb",
        typeJP: "動詞",
        exampleSentence: "Protect your family from enemies!",
        exampleSentenceJP: "家族を敵から守れ！",
      },
      {
        name: "~could not...",
        nameJP: "",
        type: "",
        typeJP: "",
        exampleSentence: "I could not protect my family from enemies!",
        exampleSentenceJP: "家族を敵から守ることができませんでした！",
      },
    ]
  },
  {
    page: 2,
    pageImage: "/images/honeybee_02.gif",
    pageImageAlt: "honeybee page 2",
    text: `So the little honeybee asked Great Father Zeus for a powerful weapon.\n\n “I want to kill anybody who harms me!”, said little honeybee.\n\n Great Father Zeus felt sorry for the little honeybee, but he warned the little bee.\n\n “You can only use your weapon in great anger or sadness, because using it once will cost you your life!”`,
    textPosition: { row: 1, rowSpan: 3, col: 2, colSpan: 1, center: true },
    classes: "row-start-1 row-span-3 col-start-2 col-span-1 self-center bg-white",
    textBackground: true,
    wordCards: [
      {
        name: "Great Father",
        nameJP: "",
        type: "",
        typeJP: "",
        exampleSentence: "",
        exampleSentenceJP: "",
      },
      {
        name: "powerful",
        nameJP: "強い",
        type: "",
        typeJP: "形容詞",
        exampleSentence: "I want to become powerful!",
        exampleSentenceJP: "強くになりたい！！",
      },
      {
        name: "~felt sorry for",
        nameJP: "",
        type: "",
        typeJP: "",
        exampleSentence: "",
        exampleSentenceJP: "",
      },
      {
        name: "warned",
        nameJP: "",
        type: "",
        typeJP: "",
        exampleSentence: "",
        exampleSentenceJP: "",
      },
      {
        name: "~will cost you...",
        nameJP: "",
        type: "",
        typeJP: "",
        exampleSentence: "",
        exampleSentenceJP: "",
      },
    ]
  }
];

Accordion.defaultProps = {
  wordCard: {
    name: "",
    nameJP: "",
    type: "",
    typeJP: "",
    exampleSentence: "",
    exampleSentenceJP: ""
  }
};

function Accordion({ wordCard }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    name,
    nameJP,
    type,
    typeJP,
    exampleSentence,
    exampleSentenceJP
  } = wordCard;

  console.log({ name, nameJP, type, typeJP, exampleSentence, exampleSentenceJP });

  const handleClick = (event) => {
    event.preventDefault();
    setIsOpen(isOpen => !isOpen);
  };

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    setIsFavorite(isFavorite => !isFavorite);
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <li onClick={handleClick} className={classNames("bg-core3 h-12 w-80 ml-20 pl-5 mb-10 rounded-md overflow-hidden transition-height duration-200 ease-in-out", { 'h-12': !isOpen }, { 'h-48': isOpen })}>
      <div id="accordion-collapse" data-accordion="collapse" >
        {/* Accordion Header */}
        <div div className="h-12 flex justify-between items-center" >
          <h5 className="font-mulish font-bold subpixel-antialiased">
            {name}

            <span className={classNames("font-notosans font-light ml-2 subpixel-antialiased", { 'hidden': !isOpen })}>{typeJP}</span>
          </h5>

          <div className="mr-5">
            <span className="cursor-pointer" onClick={handleFavoriteClick}>
              {
                isFavorite ?
                  <FontAwesomeIcon icon={faSolidStar} /> :
                  <FontAwesomeIcon icon={faRegularStar} />
              }

            </span>

            <span className="cursor-pointer ml-2">
              {
                isOpen ?
                  <FontAwesomeIcon icon={faCircleChevronUp} /> :
                  <FontAwesomeIcon icon={faCircleChevronDown} />
              }
            </span>
          </div>
        </div>

        {/* Accordion Body */}
        <div>
          <p className="font-notosans font-light subpixel-antialiased">{nameJP}</p>

          <br />

          <h5 className="font-mulish font-bold mb-2 subpixel-antialiased">example</h5>

          <p className="font-mulish font-regular subpixel-antialiased">{exampleSentence}</p>
          <p className="font-notosans font-light subpixel-antialiased">{exampleSentenceJP}</p>
        </div>
      </div>
    </li>
  );
}

function ReaderNav() {
  return (
    <header className={styles["shadow-card"]}>
      <nav className="flex items-center justify-between">
        <ul className="w-96 flex">
          <li className="ml-9">
            <Link href="/dashboard" passHref>
              <a>
                <FontAwesomeIcon icon={faHouseChimney} fontSize="20px" size="lg" />
                <span className="ml-1 subpixel-antialiased">Dashboard</span>
              </a>
            </Link>
          </li>

          <li className="ml-9">
            <Link href="/dashboard/books" passHref>
              <a>
                <FontAwesomeIcon icon={faBook} fontSize="20px" size="lg" />
                <span className="ml-1 subpixel-antialiased">My Books</span>
              </a>
            </Link>
          </li>
        </ul>

        <Link href="/">
          <a className="w-96 flex justify-center">
            <Image
              src="/images/logo_textonly_sm.png"
              alt="cuppa kappa logo"
              width={359}
              height={61}
            />
          </a>
        </Link>

        <ul className="w-96 flex justify-end mr-16">
          <li>
            <Link href="/logout" passHref>
              <a>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
              </a>
            </Link>
          </li>

          <li className="ml-4">
            <Link href="/settings" passHref>
              <a>
                <FontAwesomeIcon icon={faGear} />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header >
  );
}

ReaderCard.defaultProps = {
  page: 1,
  pageImage: "",
  pageImageAlt: "",
  text: "",
  textPosition: {},
  classes: "",
  textBackground: false,
};

function ReaderCard({ book, previousPageHandler, nextPageHandler, percentageComplete }) {
  const { pageImage, pageImageAlt, text, textPosition, textBackground } = book;
  const row = textPosition.row ? `row-start-${textPosition.row}` : '';
  const rowSpan = textPosition.rowSpan ? `row-span-${textPosition.rowSpan}` : '';
  const col = textPosition.col ? `col-start-${textPosition.col}` : '';
  const colSpan = textPosition.colSpan ? `col-span-${textPosition.colSpan}` : '';
  const center = textPosition.center ? `self-center` : '';
  const background = textBackground ? `bg-white` : '';
  const pageText = text.replace(/\n/g, '<br />');

  console.log({ row, rowSpan, col, colSpan, center, background });

  return (
    <div className={[styles["reader-card"], "flex flex-col justify-between"].join(' ')}>
      <h1 className="relative">
        <Image
          src={pageImage}
          width={1280}
          height={720}
          alt={pageImageAlt}
        />

        <div className="absolute w-full h-full top-0 left-0">
          <div className="w-full h-full grid grid-rows-3 grid-cols-2 grid-flow-col p-5">
            <div className={classNames("relative p-10 text-2xl font-librecaslon text-black rounded-3xl", book.classes)}>
              <p dangerouslySetInnerHTML={{ __html: pageText }}></p>
            </div>

            <button onClick={previousPageHandler} title="Previous Page" className="absolute left-0 top-2/4 ml-5 bg-lightest-grey rounded-full p-5 flex items-center justify-center opacity-75 hover:opacity-100">
              <FontAwesomeIcon icon={faArrowLeft} fontSize="20px" />
            </button>

            <button onClick={nextPageHandler} title="Next Page" className="absolute right-0 top-2/4 mr-5 bg-lightest-grey rounded-full p-5 flex items-center justify-center opacity-75 hover:opacity-100">
              <FontAwesomeIcon icon={faArrowRight} fontSize="20px" />
            </button>
          </div>
        </div>
      </h1 >

      <div className="h-14 px-12 flex items-center justify-between">
        <div style={{ width: "480px", height: "10px" }}>
          <ProgressBar
            progress={percentageComplete}
            borderColor={'border-core1'}
            bgColor={"bg-none"}
            fillColor={'bg-core1'}
          />
        </div>

        <span className="h-10 w-10 rounded-full bg-accent3 text-white flex justify-center items-center">
          <FontAwesomeIcon icon={faHeadphones} />
        </span>
      </div>
    </div >
  );
}

function Reader() {
  const router = useRouter();
  const { book, page } = router.query;
  // page is a string; first cycle is undefined, default to 1
  const currentPage = parseInt(page) || 1;

  console.log({ book, currentPage });

  const previousPageHandler = (event) => {
    if (currentPage != 1) {
      router.push(`/library/book/${book}/page/${currentPage - 1}`);
    }
  };

  const nextPageHandler = (event) => {
    if (currentPage < myBook.length - 1) {
      router.push(`/library/book/${book}/page/${currentPage + 1}`);
    }
  };

  console.log({ wordCard: myBook[currentPage].wordCards[0] });

  return (
    <div>
      <ReaderNav />

      <div className="flex mt-10 justify-center">
        <ReaderCard
          book={myBook[currentPage]}
          percentageComplete={(currentPage / (myBook.length - 1)) * 100}
          previousPageHandler={previousPageHandler}
          nextPageHandler={nextPageHandler} />

        {/* Learn New Word / Dictionary Cards */}
        <ul className="flex flex-col">
          {/* <li className="bg-core3 h-12 w-80 ml-20 mb-10 rounded-md"> */}
          {
            myBook[currentPage].wordCards.map((wordCard, index) =>
              <Accordion key={index} wordCard={wordCard} />
            )
          }

          {/* <Accordion wordCard={myBook[currentPage].wordCards[0]} /> */}
        </ul>
      </div>
    </div>
  );
}

export default Reader;


{/* <li className="bg-core3 h-12 w-80 ml-20 mb-10 rounded-md">
            <div className="h-12 flex justify-between items-center">
              <h5 className="ml-5 font-mulish font-bold subpixel-antialiased">enemies</h5>

              <div className="mr-5">
                <span className="cursor-pointer">
                  <FontAwesomeIcon icon={faStar} />
                </span>

                <span className="cursor-pointer ml-2">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </div>
          </li>


          <li className="bg-core3 h-48 w-80 ml-20 pl-5 mb-10 rounded-md">
            <div className="h-12 flex justify-between items-center">
              <h5 className="font-mulish font-bold subpixel-antialiased">
                honeybee

                <span className="font-notosans font-light ml-2 subpixel-antialiased">名詞</span>
              </h5>

              <div className="mr-5">
                <span className="cursor-pointer">
                  <FontAwesomeIcon icon={faStar} />
                </span>

                <span className="cursor-pointer ml-2">
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
              </div>
            </div>

            <div>
              <p className="font-notosans font-light subpixel-antialiased">蜂</p>

              <br />

              <h5 className="font-mulish font-bold mb-2 subpixel-antialiased">example</h5>

              <p className="font-mulish font-regular subpixel-antialiased">I was stung by the bee!</p>
              <p className="font-notosans font-light subpixel-antialiased">蜂に刺されました！</p>
            </div>
          </li>

          <li className="bg-core3 h-12 w-80 ml-20 mb-10 rounded-md">
            <div className="h-12 flex justify-between items-center">
              <h5 className="ml-5 font-mulish font-bold subpixel-antialiased">protect</h5>

              <div className="mr-5">
                <span className="cursor-pointer">
                  <FontAwesomeIcon icon={faStar} />
                </span>

                <span className="cursor-pointer ml-2">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </div>
          </li>

          <li className="bg-core3 h-12 w-80 ml-20 mb-10 rounded-md">
            <div className="h-12 flex justify-between items-center">
              <h5 className="ml-5 font-mulish font-bold subpixel-antialiased">~could not...</h5>

              <div className="mr-5">
                <span className="cursor-pointer">
                  <FontAwesomeIcon icon={faStar} />
                </span>

                <span className="cursor-pointer ml-2">
                  <FontAwesomeIcon icon={faChevronDown} />
                </span>
              </div>
            </div>
          </li> */}
