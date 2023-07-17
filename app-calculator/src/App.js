import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('Error')
    }
  };

  const clear = () => {
    setResult('')
  }

  const erase = () => {
    setResult(result.slice(0, -1))
  }

  return (
    <div className="app-container">
      <div className="calculator">
        <div className="display">{result}</div>
        <div className="buttons">
          <button className="color" onClick={clear}>AC</button>
          <button name="+" onClick={handleClick}>+</button>
          <button name="-" onClick={handleClick}>-</button>
          <button name="*" onClick={handleClick}>*</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="/" onClick={handleClick}>/</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="." onClick={handleClick}>.</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="color erase" onClick={erase}>⌫</button>
          <button className="zero" name="0" onClick={handleClick}>0</button>
          <button className="color equal" onClick={calculate}>=</button>
        </div>
      </div>
      <div className="footer">
        <p>Joonas Kemppainen 2023</p>
      </div>
    </div>
  )
}

export default App;
