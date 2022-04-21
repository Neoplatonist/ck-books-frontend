import React, { useRef, useState } from "react";
import styles from '@/styles/Book.module.css';

const getDefinition = async (word) => {
  let data, error;

  try {
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
    data = await response.json();

    if (!response.ok) {
      const error = data.message || response.status;
      throw new Error(error);
    }
  } catch (err) {
    error = err;
  }

  return { data, error };
};

const Book = () => {
  const subtitleRef = useRef(null);
  const [dict, setDict] = useState(null);
  const syncData = [
    { "start": "0.000", "end": "0.200", "text": "There" },
    { "start": "0.200", "end": "0.430", "text": "were" },
    { "start": "0.430", "end": "0.757", "text": "10" },
    { "start": "0.757", "end": "1.054", "text": "in" },
    { "start": "1.054", "end": "1.271", "text": "his" },
    { "start": "1.271", "end": "1.628", "text": "bed" },
    { "start": "1.628", "end": "1.985", "text": "and" },
    { "start": "1.985", "end": "2.100", "text": "the" },
    { "start": "2.100", "end": "2.699", "text": "little" },
    { "start": "2.699", "end": "3.056", "text": "one" },
    { "start": "3.056", "end": "3.413", "text": "said" },
    { "start": "3.413", "end": "3.775", "text": "Roll" },
    { "start": "3.775", "end": "4.127", "text": "Over!" },
    { "start": "4.127", "end": "4.584", "text": "Roll" },
    { "start": "4.584", "end": "5.100", "text": "Over!" },
  ];

  const handleTimeUpdate = (event) => {
    syncData.forEach(function (subtitle, index) {
      if (event.target.currentTime >= subtitle.start && event.target.currentTime <= subtitle.end) {
        subtitleRef.current.children[index].style.background = 'yellow';
      } else {
        subtitleRef.current.children[index].style.background = 'none';
      }
    });
  };

  const handleSubtitleClick = async (event) => {
    const { data, error } = await getDefinition(event.target.innerText);
    if (!error) {
      setDict(data);
    } else {
      console.log('Recieved error: ', error);
    }
  };

  console.log(dict);

  return (
    <div className="book">
      <audio
        id="audiofile"
        src="https://www.codepunker.com/resources/audio-sync-with-text/10bears.mp3"
        onTimeUpdate={handleTimeUpdate}
        controls
      >
        Your browser does not support the audio element.
      </audio>

      <br />

      <div ref={subtitleRef}>
        {
          syncData.map((item, index) => (
            <span key={index} onClick={handleSubtitleClick} className={styles.subtitle}>{item.text}</span>
          ))
        }
      </div>

      {dict ? (
        <div>
          <h2>{dict[0].word}</h2>
          <p>{dict[0].meanings[0].definitions[0].definition}</p>

          <h3>Synonyms:</h3>
          <ul>
            {
              dict[0].meanings[0].definitions[0]?.synonyms?.map((synonym, index) => {
                if (index < 5) {
                  return <li key={index}>{synonym}</li>;
                }
              })
            }
          </ul>
        </div>
      ) : ''}
    </div>
  );
};

export default Book;
