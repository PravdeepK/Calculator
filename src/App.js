import React, { useState } from 'react';

const Calculator = () => {
const [expression, setExpression] = useState('');
const [result, setResult] = useState('');
const handleClick = value => {
  
setExpression(expression + value);
  };

const calculateResult = () => {
  
setResult(eval(expression));
  };

const clear = () => {
    setExpression('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="expression">{expression}</div>
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        <br />
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <br />
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <br />
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        <br />
        <button onClick={clear}>Clear Screen</button>
      </div>
    </div>
  );
};

export default Calculator;
