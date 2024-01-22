const initialState = {
  secretNumber: Math.floor(Math.random() * 101),
  userGuess: null,
  feedback: null,
  gameWon: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GUESS_NUMBER':
      const { secretNumber, gameWon } = state;
      const userGuess = action.payload;
      let feedback = null;
      let newGameWon = false;

      if (gameWon) {
        feedback = 'Игра уже завершена. Нажмите "Заново", чтобы начать новую игру.';
      } else if (userGuess === secretNumber) {
        feedback = 'Поздравляем, вы отгадали число!';
        newGameWon = true;
      } else if (userGuess < secretNumber) {
        feedback = 'Не правильно, берите выше';
      } else {
        feedback = 'Не правильно, берите ниже';
      }

      return {
        ...state,
        userGuess,
        feedback,
        gameWon: newGameWon,
      };

    case 'RESET_GAME':
      return {
        ...initialState,
        secretNumber: Math.floor(Math.random() * 101),
      };

    case 'ADJUST_NUMBER':
      const randomAdjustment = Math.floor(Math.random() * 51);
      const adjustedNumber =
        action.payload === 'INCREMENT'
          ? state.secretNumber + randomAdjustment
          : state.secretNumber - randomAdjustment;

      return {
        ...state,
        secretNumber: adjustedNumber,
      };

    default:
      return state;
  }
};

export default gameReducer;
