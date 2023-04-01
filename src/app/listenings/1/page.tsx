/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';
import Image from 'next/image'

import cssClasses from './page.module.css';


const firstAnswerData = [
  {
    id: 1,
    value: 'Pakistan',
    text: 'Pakistan',
    isCorrect: false,
    description: 'You have chosen Pakistan, you moron! As you can see Zuich dreams of Pakistan but he doesn\'t live there.',
  },
  {
    id: 2,
    value: 'India',
    text: 'India',
    isCorrect: false,
    description: 'You have chosen India, you deepshit! As you can see Zuich likes India but he doesn\'t live there.',
  },
  {
    id: 3,
    value: 'Zelinskogo_2',
    text: 'Zelinskogo_2',
    isCorrect: true,
    description: 'You have chosen Zelinskogo 2! Yes, you are correct!',
  },
  {
    id: 4,
    value: 'Moon',
    text: 'Moon',
    isCorrect: false,
    description: 'You have chosen the Moon! Yes, you are correct in a way but really, try again!',
  },

];





export default function ListeningOnePage ({ params }: { params: { id: string } }) {
  /**
   * @link https://react.dev/reference/react/useState
   *
   * Parameters
   *
   * initialState: The value you want the state to be initially.
   *
   * Returns
   * useState returns an array with exactly two values:
   *
   * The current state, `firstAnswer`. During the first render, it will match the initialState you have passed.
   * The set function, `setFirstAnswer` that lets you update the state to a different value and trigger a re-render.
   *
   */
  const [firstAnswer, setFirstAnswer] = useState('');
  const [secondAnswer, setSecondAnswer] = useState('');
  const [thirdAnswer, setThirdAnswer] = useState('');
  const [thirdAnswerResult, setThirdAnswerResult] = useState('');
  const [fourthAnswer, setFourthAnswer] = useState('');
  const [fourthAnswerResult, setFourthAnswerResult] = useState('');


  const firstAnswerChosenItemData = firstAnswerData.find(item => item.value === firstAnswer);


  return (

    <div className="listeningOnePage">
      <img alt='Some picture' src="https://i.pinimg.com/736x/e0/98/11/e09811d53666c76a7a7dd9a3a880695c.jpg" />

      listening one Page

        <p>Zuich likes India but he has never visited it and he dreams of Pakistan every second while sleeping on bench
          near Zelinskogo 2.</p>

        <p>Where does Zuich live?</p>

        {/* List 1 (begin) */}

        {firstAnswer &&
          <p className={firstAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{firstAnswerChosenItemData?.description}.</p>
        }

        <ul>
          {firstAnswerData.map(item => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => { setFirstAnswer(item.value);}}
                  name="firstAnswer"
                  type="radio"
                  value={item.value}
                />
                {item.text}
              </li>
            );
          })
          }
        </ul>
      {/* List 1 (end) */}

        <p>Zuich has a tendency to get drunk and sell his GPUs unconsciously, is it an urban legend or a harsh
          reality?</p>

        <p>What do you think, boss?</p>

        {/* List 2 */}

        {secondAnswer === 'Its_myth' &&
          <p className={cssClasses.wrongAnswer}>You have chosen It's a myth, you moron!</p>}

        {secondAnswer === 'Thats_the_sad_reality_of_MrZuichs_existence' &&
          <p className={cssClasses.rightAnswer}>You have chosen That's the sad reality of Mr. Zuich's existence, you
            deepshit! Well done!.</p>}

        {secondAnswer === 'Im_too_drunk_to_answer_sorry' &&
          <p className={cssClasses.wrongAnswer}>You have chosen I'm too drunk to answer, sorry! Go and get some sleep,
            boss.</p>}

        {/* Rewrite (Refactor) list generation as it was rewritten in list 1  */}
        <ul>

          <li><input onChange={() => {
            setSecondAnswer('Its_myth');

          }}
                     name="secondAnswer" type="radio" value="Its_myth" /> It's a myth
          </li>


          <li><input onChange={() => {
            setSecondAnswer('Thats_the_sad_reality_of_MrZuichs_existence');

          }} name="secondAnswer" type="radio" value="Thats_the_sad_reality_of_MrZuichs_existence" /> That's the sad
            reality of Mr. Zuich's existence
          </li>


          <li><input onChange={() => {
            setSecondAnswer('Im_too_drunk_to_answer_sorry');

          }} name="secondAnswer" type="radio" value="Im_too_drunk_to_answer_sorry" /> I'm too drunk to answer, sorry
          </li>

        </ul>
        {/* List 2 (end) */}

  
        <div className="textWithGaps">
          <p>Zuich sleeps on
            <input
              value={thirdAnswer}
              className={
                thirdAnswerResult.length > 0 ?
                (thirdAnswerResult === 'a big crazy' ? cssClasses.rightAnswer : cssClasses.wrongAnswer) :
                ''
              }
              type="text"
              placeholder=""
              onChange={(event) => {
                setThirdAnswer(event.target.value);
              }}
            /> bench.</p>

          <p>{thirdAnswerResult}</p>

          <button type="button" onClick={() => {setThirdAnswerResult(thirdAnswer)}}>Check</button>
        </div>

        <div className="textWithGaps">
          <p>Zuich sleeps on
            <input
              value={fourthAnswer}
              className={
                fourthAnswerResult.length > 0 ?
                (fourthAnswerResult === 'a big crazy' ? cssClasses.rightAnswer : cssClasses.wrongAnswer) :
                ''
              }
              type="text"
              placeholder=""
              onChange={(event) => {
                setFourthAnswer(event.target.value);
              }}
            /> bench.</p>

          <p>{fourthAnswerResult}</p>

          <button type="button" onClick={() => {setFourthAnswerResult(fourthAnswer)}}>Check</button>
        </div>

     

    </div>
  );
}
