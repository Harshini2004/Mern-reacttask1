import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const countWords = () => {
    const words = text.split(/\s+/);
    return words.filter((word) => word !== '').length;
  };

  return (
    <div className="word-counter">
      <textarea
        rows="4"
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
      />
      <div className="word-count">Word Count: {countWords()}</div>
    </div>
  );
};

export default WordCounter;