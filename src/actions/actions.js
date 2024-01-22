export const guessNumber = (userGuess) => ({
    type: 'GUESS_NUMBER',
    payload: userGuess,
  });
  
  export const resetGame = () => ({
    type: 'RESET_GAME',
  });
  
  export const adjustNumber = (operation) => ({
    type: 'ADJUST_NUMBER',
    payload: operation,
  });
  