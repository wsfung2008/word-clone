import React from "react";

function GuessList({guessList}) {
  
  return (
    <div class="guess-results">
      {
        guessList.map(guess=>
          <p key={guess} class="guess">{guess}</p>
        )
      }
    </div>
  );
}

export default GuessList;
