import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED, ANSWER } from "../../constants";
import { checkGuess } from "../../game-helpers";

const rangeTo5 = range(1, NUM_OF_GUESSES_ALLOWED, 1);

function GuessRow({guess}) {

  const result = checkGuess(guess, ANSWER);
  console.log('result'+result);
  
  return (
    <p class="guess">
      {
        rangeTo5.map((element, index)=>{
          
          return <span key={index} class={`cell ${result[index]?.status}`}>{guess[index] || ' '}</span>
        })
      }
    </p>
  );
}

export default GuessRow;
