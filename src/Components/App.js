import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { guessNumber, resetGame, adjustNumber } from '../actions/actions';
import '../Components/App.css';


function App() {
  const dispatch = useDispatch();
  const { feedback, gameWon } = useSelector((state) => state);

  const handleGuess = (e) => {
    e.preventDefault();
    const userGuess = parseInt(e.currentTarget.elements.userGuess.value, 10);
    dispatch(guessNumber(userGuess));
  };

  const handleReset = () => {
    dispatch(resetGame());
  };

  const handleAdjust = (operation) => {
    dispatch(adjustNumber(operation));
  };

  return (
    <div className="container">
      <h1>Угадай число от 0 до 100</h1>
      <form onSubmit={handleGuess}>
        <input type="number" name="userGuess" pattern="\d*" inputMode="numeric" />
        <button type="submit">Отгадать</button>
      </form>
      <p className={gameWon ? 'success' : 'error'}>{feedback}</p>
      {gameWon && (
        <div>
          <p className="success">Поздравляем, вы отгадали число!</p>
          <button className="reset-button" onClick={handleReset}>Заново</button>
        </div>
      )}
      <div className="adjust-buttons">
        <button onClick={() => handleAdjust('INCREMENT')}>+RND</button>
        <button onClick={() => handleAdjust('DECREMENT')}>-RND</button>
      </div>
    </div>
  );
}

export default App;
