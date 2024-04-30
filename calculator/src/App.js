// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      if (input.trim() === '') {
        setOutput('Error');
      } else {
        try {
          const result = eval(input);
          setOutput(result);
        } catch (error) {
          setOutput('Error');
        }
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <h1>React calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{output}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((value, index) => (
          <button key={index} onClick={() => handleClick(value)}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
