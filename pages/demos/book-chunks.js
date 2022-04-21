import React, { useRef } from "react";
import styles from '@/styles/Book.module.css';

const Book = () => {
  const subtitleRef = useRef(null);
  const syncData = [
    { "start": "0.000", "end": "1.600", "text": "There were ten in his bed" },
    { "start": "1.600", "end": "2.800", "text": "and the little one said," },
    { "start": "2.800", "end": "4.300", "text": "Roll Over!" },
    { "start": "4.300", "end": "6.000", "text": "Roll Over!" },
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
            <span key={index} className={styles.subtitle}>{item.text}</span>
          ))
        }
      </div>
    </div>
  );
};

export default Book;
