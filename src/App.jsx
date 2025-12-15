import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  // Button click handle
  const handleClick = (e) => {
    setValue(value + e.target.innerText);
  };

  // Clear
  const clear = () => {
    setValue("");
  };

  // Calculate
  const calculate = () => {
    try {
      setValue(eval(value));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={value} readOnly />

      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={handleClick}>/</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>-</button>

        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>

        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={calculate}>=</button>

        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>

        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
      </div>
    </div>
  );
}

export default App;
