/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';

import cssClasses from './page.module.css';


const firstAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'travel long distances to work',
    isCorrect: false,
    description: 'You have chosen a, you moron!',
  },
  {
    id: 2,
    value: 'b',
    text: 'get up early',
    isCorrect: false,
    description: 'You have chosen b, you deepshit!',
  },
  {
    id: 3,
    value: 'c',
    text: 'manage staff on the ship',
    isCorrect: true,
    description: 'You have chosen c! Yes, you are correct!',
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
  // 1 
  const [firstAnswer, setFirstAnswer] = useState('');
  const [firstAnswerResult, setFirstAnswerResult] = useState('');


  // 2
  const [secondAnswer, setSecondAnswer] = useState('');
  const [secondAnswerResult, setSecondAnswerResult] = useState('');


  // 3
  const [thirdAnswer, setThirdAnswer] = useState('');
  const [thirdAnswerResult, setThirdAnswerResult] = useState('');

  // 4
  const [fourthAnswer, setFourthAnswer] = useState('');
  const [fourthAnswerResult, setFourthAnswerResult] = useState('');


  const firstAnswerChosenItemData = firstAnswerData.find(item => item.value === firstAnswer);



  return (

    <div className="listeningOnePage">

      listening one Page

      <h1>How my life has changed</h1>



        <p>I used to work on cruise ships as a musician. I travelled a lot! I spent the month before the first 
                      lockdown in four continents! I used to get up really early, drive to the airport and fly to a port across
                      the world and get on a ship just to get to work! Then I used to spend between three and fourteen days on the ship.
                      The ships were great. The food was excellent, and the staff were brilliant. The ship stopped at fantastic places, and I
                        often used to spend the afternoon at the beach drinking cocktails or sightseeing. But there were disadvantages too. I 
                        often didn’t know anyone on the ship. But the passengers all knew me, and they used to talk to me every time I left my cabin. 
                        I didn’t have any privacy. Of course, I had to chat to them politely even when I wasn’t in the mood.

            But now, everything has changed. The cruises aren’t running now, and I don’t know when they will run again, 
            and I’ve been in my flat for a year. I never used to spend much time here, and I haven’t spent a whole year in England for over
            twenty years! But I’ve enjoyed it. I bought a bike last year, and I’ve found some great beach cafes that I never used to know about. I
              also bought a campervan, and I drove around the coast. I always used to prefer beaches in the Caribbean and the Mediterranean to British 
              beaches. The weather is much better for a start! But I found some beautiful places last year. I could park on the beach in some places and run
              straight into the sea! They were much less touristy and more peaceful than the places where the cruise ships go.

            I’m spending a lot more time alone now. I didn’t use to be alone much when I was working. 
            But since the pandemic started, I have developed new relationships with people who I didn’t use to know very well. I always used to prefer 
            the company of entertainers and people who like to travel. I used to think that people with normal jobs were boring. But since last year,
            I’ve got to know some really interesting, strong, kind and caring people! So that’s been really valuable.</p>

        <p>Sarah didn't use to have to _____</p>


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

          <button onClick={() => {setFirstAnswerResult(firstAnswer)

          }}>Check me</button>

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

        <button onClick={() => {setSecondAnswerResult(secondAnswer)

          }}>Check me</button>

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

          <button onClick={() => {setThirdAnswerResult(thirdAnswer)}}>Check</button>
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

          <button onClick={() => {setFourthAnswerResult(fourthAnswer)}}>Check</button>
        </div>

     

    </div>
  );
}
