import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const rangeTo5 = range(1, NUM_OF_GUESSES_ALLOWED, 1);

function GuessRow({guess}) {
  
  return (
    <p class="guess">
      {
        rangeTo5.map((index)=>
          <span key={index} class="cell">{guess[index] || ' '}</span>
        )
      }
    </p>
  );
}

export default GuessRow;
