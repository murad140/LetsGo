/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';
import Image from 'next/image'

import cssClasses from './page.module.css';


const firstAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'smart',
    isCorrect: true,
    description: 'That is a fact',
  },
  {
    id: 2,
    value: 'b',
    text: 'classy',
    isCorrect: true,
    description: 'Is that even a question?',
  },
  {
    id: 3,
    value: 'c',
    text: 'stunning',
    isCorrect: true,
    description: 'You guessed it',
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
      

      

        
        <p>Tomiris is...</p>

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

       

     

    </div>
  );
}
