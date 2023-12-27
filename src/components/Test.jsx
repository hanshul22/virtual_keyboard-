import React, { useState } from 'react';

const Keyboard = ({ onKeyPress }) => {
  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    [ 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  return (
    <div className="keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map((key) => (
            <button key={key} onClick={() => onKeyPress(key)}>
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

const Test = () => {
  const [inputText, setInputText] = useState('');

  const handleKeyPress = (key) => {
    setInputText((prevText) => prevText + key);
  };

  return (
    <div className="App">
      <h1>Virtual Keyboard App</h1>
      <input type="text" value={inputText} readOnly />
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Test;