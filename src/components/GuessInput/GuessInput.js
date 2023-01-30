import React from "react";

function GuessInput({ addNewGuess }) {
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
  }, [guess, addNewGuess]);

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
