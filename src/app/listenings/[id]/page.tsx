/* eslint-disable react/no-unescaped-entities */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/router'

export default function ListeningOnePage({ params }: { params: { id: string } }) {
  // const router = useRouter()
  // const id = router.query.id as string

  const [firstAnswer, setFirstAnswer] = useState('');

  return (

    <div className="listeningOnePage">

      listening one Page

      <form>

        <p>Zuich likes India but he has never visited it and he dreams of Pakistan every second while sleeping on bench near Zelinskogo 2.</p>

        <p>Where does Zuich live?</p>

        {firstAnswer === 'Pakistan' && <p>You have chosen Pakistan, you moron! As you can see 
          Zuich dreams of Pakistan but he doesn't live there.</p>}

        {firstAnswer === 'India' && <p>You have chosen India, you deepshit! As you can see 
          Zuich likes India but he doesn't live there.</p>}

        {firstAnswer === 'Zelinskogo_2' && <p>You have chosen Zelinskogo 2! Yes, you are correct!</p>}

        <ul>

          <li> <input onChange={() => {
            setFirstAnswer('Pakistan')

          }} name='firstAnswer' type="radio" value="Pakistan" /> Pakisktan
          </li>
          <li> <input onChange={() => {
            setFirstAnswer('India')

          }} name='firstAnswer' type="radio" value="India" /> India 
          </li>
          <li> <input onChange={() => {
            setFirstAnswer('Zelinskogo_2')

          }} name='firstAnswer' type="radio" value="Zelinskogo_2" /> Zelinskogo 2 </li>

        </ul>


        <p>Zuich has a tendency to get drunk and sell his GPUs unconsciously, is it an urban legend or a harsh reality?</p>

        <p>What do you think, boss?</p>

        <ul>

          <li> <input name='secondAnswer' type="radio" value="Its_myth" /> It's a myth </li>
          <li> <input name='secondAnswer' type="radio" value="Thats_the_sad_reality_of_MrZuichs_existence" /> That's the sad reality of Mr. Zuich's existence </li>
          <li> <input name='secondAnswer' type="radio" value="Im_too_drunk_to_answer_sorry" /> I'm too drunk to answer, sorry  </li>

        </ul>

      </form>

    </div>
  )
}
