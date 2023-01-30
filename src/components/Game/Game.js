import React, {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList';
import { ANSWER } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

const HappyBanner = ({numGuesses})=><div class="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in&nbsp;
    <strong>{numGuesses} guesses</strong>.
  </p>
</div>

const SadBanner = ({answer})=><div class="sad banner">
  <p>
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </p>
</div>

function Game() {

  const [guessList, setGuessList] = useState([]);
  const addNewGuess = (newGuess)=>{
    setGuessList(guessList.concat(newGuess));
  }
  const [bannerStatus, setBannerStatus] = useState("");

  return (
    <>
      {
        bannerStatus==="happy"? <HappyBanner numGuesses={guessList.length}/>:
        bannerStatus==="sad"? <SadBanner answer={ANSWER}/>: null
      }
      <GuessList guessList={guessList}/>
      <GuessInput numGuesses={guessList.length} addNewGuess={addNewGuess} setBannerStatus={setBannerStatus}/>
    </>
  );
}

export default Game;
