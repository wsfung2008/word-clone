import React from "react";
import { NUM_OF_GUESSES_ALLOWED, ANSWER } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessInput({ numGuesses, addNewGuess, setBannerStatus }) {
  const [guess, setGuess] = React.useState("");
  const handleChange = React.useCallback((event)=>{
    const inputGuess = event.target.value.toUpperCase();
    setGuess(inputGuess);
  }, []);
  const handleSubmit = React.useCallback((event)=>{
    event.preventDefault();
    console.log(`$Guess is ${guess}`);
    addNewGuess(guess);
    setGuess("");

    const result = checkGuess(guess, ANSWER);
    console.log({result});
    const isCorrect = result.reduce((acc, element)=>(acc&&element.status==="correct"), true);
    console.log('isCorrect: ', isCorrect);
    if (isCorrect && guess.length===5){
      setBannerStatus("happy");
    } else if (!isCorrect && numGuesses>=NUM_OF_GUESSES_ALLOWED){
      setBannerStatus("sad");
    }

  }, [guess, numGuesses, addNewGuess, setBannerStatus]);

  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text" 
        value={guess} 
        onChange={handleChange}
        minLength={5}
        maxLength={5}
        required
      />
    </form>
  );
}

export default GuessInput;
