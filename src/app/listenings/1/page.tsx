/* eslint-disable react/no-unescaped-entities */

'use client';

import { useState } from 'react';
import { WatchDirectoryFlags } from 'typescript';

import cssClasses from './page.module.css';


const firstAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. neurotic people',
    isCorrect: false,
    description: 'wrong!',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. health workers outside psychology',
    isCorrect: true,
    description: 'right!',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. patients at a clinic',
    isCorrect: false,
    description: 'wrong',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. psychologists',
    isCorrect: false,
    description: 'wrong!',
  },

];

const secondAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. has not been studied in great depth until recently.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. has shown that sensation-seeking individuals often risk their health.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. should be carried out by both clinicians and psychologists.',
    isCorrect: false,
    description: 'wrong',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. can be practically applied to improve public health',
    isCorrect: true,
    description: 'right',
  },

];

const thirdAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. They consider it their duty to treat all patients equally.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. They doubt whether a person’s personality directly affects their health.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. They think the effect on a patient’s health will be hardly noticeable.',
    isCorrect: false,
    description: 'wrong',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. They lack sufficient training in psychology.',
    isCorrect: true,
    description: 'right',
  },

];

const fourthAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. They are more likely than non-neurotic patients to report illness.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. Their neurosis protects them from becoming sick.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. There is no consistent link between a patient’s level of neurosis and their health.',
    isCorrect: true,
    description: 'right',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. They are at greater risk from early death than non-neurotic patients.',
    isCorrect: false,
    description: 'wrong',
  },
];

const fifthAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. was designed to attract conscientious, high sensation-seeking teenagers.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. was delivered across multiple media, including television and online.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. used drama and energy in its design.',
    isCorrect: true,
    description: 'right',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. failed to reduce cannabis use among teenagers.',
    isCorrect: false,
    description: 'wrong',
  },

];

const sixthAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. will ensure that more people are aware of public health campaigns.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. can help health workers deliver appropriate messages to different types of people.',
    isCorrect: true,
    description: 'right',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. will affect the number of high sensation-seeking people in the population.',
    isCorrect: false,
    description: 'wrong',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. can help psychologists better understand the link between personality and health.',
    isCorrect: false,
    description: 'wrong',
  },

];

const seventhAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. information in audio form helps blind people to access health information.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. adapting correspondence to suit different personalities can have a positive impact on health.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. phone reminders ensure that unconscientious patients attend appointments.',
    isCorrect: false,
    description: 'wrong',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. adapting letter-writing style can encourage patients with different goals to participate.',
    isCorrect: true,
    description: 'right',
  },

];

const eighthAnswerData = [
  {
    id: 1,
    value: 'a',
    text: 'a. Explore the link between personality and health.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 2,
    value: 'b',
    text: 'b. Do more research before giving advice to health workers.',
    isCorrect: false,
    description: 'wrong',
  },
  {
    id: 3,
    value: 'c',
    text: 'c. Talk directly to the general public.',
    isCorrect: false,
    description: 'wrong',
  },
 
  {
    id: 4,
    value: 'd',
    text: 'd. Give more practical suggestions to health workers.',
    isCorrect: true,
    description: 'right',
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

   // 5
   const [fifthAnswer, setFifthAnswer] = useState('');
   const [fifthAnswerResult, setFifthAnswerResult] = useState('');

    // 6
  const [sixthAnswer, setSixthAnswer] = useState('');
  const [sixththAnswerResult, setSixthAnswerResult] = useState('');

   // 7
   const [seventhAnswer, setSeventhAnswer] = useState('');
   const [seventhAnswerResult, setSeventhAnswerResult] = useState('');

    // 8
  const [eighthAnswer, setEighthAnswer] = useState('');
  const [EighthAnswerResult, setEighthAnswerResult] = useState('');

  const firstAnswerChosenItemData = firstAnswerData.find(item => item.value === firstAnswerResult); /*what's this?*/
  const secondAnswerChosenItemData = secondAnswerData.find(item => item.value === secondAnswerResult);
  const thirdAnswerChosenItemData = thirdAnswerData.find(item => item.value === thirdAnswerResult);
  const fourthAnswerChosenItemData = fourthAnswerData.find(item => item.value === fourthAnswerResult);
  const fifthAnswerChosenItemData = fifthAnswerData.find(item => item.value === fifthAnswerResult);
  const sixthAnswerChosenItemData = sixthAnswerData.find(item => item.value === sixththAnswerResult);
  const seventhAnswerChosenItemData = seventhAnswerData.find(item => item.value === seventhAnswerResult);
  const eighthAnswerChosenItemData = eighthAnswerData.find(item => item.value === EighthAnswerResult);

  return (

    <div className="listeningOnePage">

      listening one Page

      <h1>Personality and health</h1>



        <p>

        There is increasing evidence that health is linked to personality. However, until now, the 
        relationship has not affected the way health care is delivered. There are several reasons for this. 
        Some health workers doubt whether there is a direct link between health and personality or whether it’s just a coincidence. 
        Some feel it is their professional duty to treat all patients in the same way. Others argue that delivering health services 
        according to patients’ personalities will have minimal impact and therefore isn’t worth the effort.
        However, some psychologists believe that applying different procedures to people with different 
        personalities could have a significant, positive effect on health.

        </p>

        <p>

        Research into personality has, in recent years, focused on the Big Five model of personality types. 
        This model measures how neurotic, extrovert, open to experience, agreeable and conscientious a person is. Some of these personality
        types have been studied in relation to health. For example, conscientious people tend to be less likely to smoke, drink too much 
        alcohol or be inactive. However, in other cases, the relationship is less clear. Neurotic behaviour, for instance, 
        has been found in some studies to increase the risk of death, in others to protect people from illness 
        and in others to have no link to health at all.

        </p>

        <p>

        Even so, if health workers applied an understanding of personality to the services they provide, 
        they could influence the extent to which patients act on advice and follow their treatment. 
        For example, high sensation-seeking individuals, who are extroverts and unconscientious in the 
        Big Five model and tend to take part in risky activities, respond to drama, energy and emotion. 
        Thus, to encourage those people to follow health advice, health promotions can be designed to 
        incorporate those factors. An example of this was the campaign SENTAR which aimed to reduce cannabis 
        use among high sensation-seeking teenagers. By creating a suitable television advert, 
        they successfully engaged these youths and reduced their recreational drug use. Of course, 
        this approach isn’t always possible. It is often impractical and expensive to create several versions of a campaign to reach 
        different personality types. However, recent developments in computer technology, 
        cookies and targeted advertising may allow this approach to be used more in future.

        </p>

        <p>

        Personality could also be considered when sending messages, information and guidance to specific patients. 
        Already, health information is usually available in various forms – printed, digital, audio, and so on – to 
        be suitable and accessible for different users, such as the blind, the elderly, and people with reading difficulties. 
        Research has also shown that, by identifying different patients’ motivations for treatment and then corresponding with 
        them in a way that reflects their motivations, patients will become more involved in their treatment, compared to when 
        the same messages are sent to everyone. Correspondence could, therefore, be adapted to reflect patients’ personality type, 
        too. For example, less conscientious people could be sent phone reminders to attend appointments. 
        So far, there has been very little research into the effectiveness of tailoring health 
        guidance according to personality, so this area deserves further study.

        </p>

        <p>

        Until now, the focus of personality-health research has been to explore the link between personality and health and has 
        had very little practical application. Thus, health workers have not engaged deeply with it. However,
        by suggesting, trialling and implementing practices to engage patients 
        with different personalities, the relationship between psychology researchers and health workers could
        improve, along with the health of the general public.

        </p>


        <p>Who is the article most likely aimed at?</p>


        {/* List 1 (begin) */}

        {firstAnswerResult &&
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
      
        <p>What is the main idea of the article?</p>

      {/* List 2 (begin) */}

      {secondAnswer &&
          <p className={secondAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{secondAnswerChosenItemData?.description}.</p>
        }

        <ul>
          {secondAnswerData.map(item => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => { setSecondAnswer(item.value);}}
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

        <button onClick={() => {setSecondAnswerResult(secondAnswer)

          }}>SMASH me</button>

      {/* List 2 (end) */}

          <p>Which of these is NOT a reason why clinicians do not currently consider personality in their approach to healthcare?</p>
          <p>Research into the link between Health and Personality...</p>

     {/* List 3 (begin) */}

     {thirdAnswer &&
          <p className={thirdAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{thirdAnswerChosenItemData?.description}.</p>
        }

        <ul>
          {thirdAnswerData.map(item => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => { setThirdAnswer(item.value);}}
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

        <button onClick={() => {setThirdAnswerResult(thirdAnswer)}}>
          StompME
        </button>

      {/* List 3 (end) */}
        
          <p>What can be concluded from the text about neurotic patients?</p>

      {/* List 4 (begin) */}

      {fourthAnswer &&
                <p className={fourthAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{fourthAnswerChosenItemData?.description}.</p>
              }

              <ul>
                {fourthAnswerData.map(item => {
                  return (
                    <li key={item.id}>
                      <input
                        onChange={() => { setFourthAnswer(item.value);}}
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
              <button onClick={() => {setFourthAnswerResult(fourthAnswer)}}>
            ObliterateME
           </button>


            {/* List 4 (end) */}

                <p>It can be inferred that the campaign SENTAR...</p>

            {/* List 5 (begin) */}

        {fifthAnswer &&
          <p className={fifthAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{fifthAnswerChosenItemData?.description}.</p>
        }

        <ul>
          {fifthAnswerData.map(item => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => { setFifthAnswer(item.value);}}
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

        <button onClick={() => {setFifthAnswerResult(fifthAnswer)}}>
          CrushME
        </button>


      {/* List 5 (end) */}

          <p>The writer believes that improving computer technology...</p>

      {/* List 6 (begin) */}

      {sixthAnswer &&
          <p className={sixthAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{sixthAnswerChosenItemData?.description}.</p>
        }

        <ul>
          {sixthAnswerData.map(item => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => { setSixthAnswer(item.value);}}
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

        <button onClick={() => {setSixthAnswerResult(sixthAnswer)}}>
          PunchME
        </button>


      {/* List 6 (end) */}

          <p>In paragraph 4, the writer refers to a study that found that...</p>

      {/* List 7 (begin) */}

      {seventhAnswer &&
          <p className={seventhAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{seventhAnswerChosenItemData?.description}.</p>
        }

        <ul>
          {seventhAnswerData.map(item => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => { setSeventhAnswer(item.value);}}
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

        <button onClick={() => {setSeventhAnswerResult(seventhAnswer)}}>
          ShootME
        </button>

         
      {/* List 7 (end) */}

          <p>In the final paragraph, what does the writer advise researchers in health/personality to do?</p>

      {/* List 8 (begin) */}

      {eighthAnswer &&
          <p className={eighthAnswerChosenItemData?.isCorrect ? cssClasses.rightAnswer :  cssClasses.wrongAnswer}>{eighthAnswerChosenItemData?.description}.</p>
        }

        <ul>
          {eighthAnswerData.map(item => {
            return (
              <li key={item.id}>
                <input
                  onChange={() => { setEighthAnswer(item.value);}}
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

        <button onClick={() => {setEighthAnswerResult(eighthAnswer)}}>
          EndME
        </button>


      {/* List 8 (end) */}

    </div>
  );
}
