import React from "react";
import GuessRow from "../GuessRow";

function GuessList({guessList}) {
  
  return (
    <div class="guess-results">
      {
        guessList.map(guess=>
          <GuessRow guess={guess}/>)
      }
    </div>
  );
}

export default GuessList;
