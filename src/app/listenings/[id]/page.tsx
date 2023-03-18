
'use client'

import { useRouter } from 'next/router'

export default function ListeningOnePage({ params }: { params: { id: string } }) {
  // const router = useRouter()
  // const id = router.query.id as string

  console.log(params)

  return (

    <div className="listeningOnePage">

      {params.id}

      listening one Page

      <form onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)

        // Display the key/value pairs

        // @ts-ignore
        for (const pair of formData.entries()) {
          // Form processing start
          console.log(pair)

          const questionName = pair[0];
          const userAnswer = pair[1];

          console.log('questionName:', questionName)

          if (questionName === 'firstAnswer') {

            if (userAnswer === 'Zelinskogo_2') {
              alert("Well done, you're Zuich")
            } else {
              alert("Dumbshit, the fuck do you know about Zuich? Nothing!")
            }

          }

          if (questionName === 'secondAnswer') {

            if (userAnswer === 'Thats_the_sad_reality_of_MrZuichs_existence') {
              alert("I see you are wiser than most")
            } else if(userAnswer === 'Im_too_drunk_to_answer_sorry') {
              alert("Get some rest, boss")
            } else {
              alert("There are still much for you to learn")
            }

          }


        // Form processing end
        }

      }}>

        <p>Zuich likes India but he has never visited it and he dreams of Pakistan every second while sleeping on bench near Zelinskogo 2.</p>

        <p>Where does Zuich live?</p>

        <ul>

          <li> <input name='firstAnswer' type="radio" value="Pakistan" /> Pakisktan </li>
          <li> <input name='firstAnswer' type="radio" value="India" /> India </li>
          <li> <input name='firstAnswer' type="radio" value="Zelinskogo_2" /> Zelinskogo 2 </li>

        </ul>


        <p>Zuich has a tendency to get drunk and sell his GPUs unconsciously, is it an urban legend or a harsh reality?</p>

        <p>What do you think, boss?</p>

        <ul>

          <li> <input name='secondAnswer' type="radio" value="Its_myth" /> It's a myth </li>
          <li> <input name='secondAnswer' type="radio" value="Thats_the_sad_reality_of_MrZuichs_existence" /> That's the sad reality of Mr. Zuich's existence </li>
          <li> <input name='secondAnswer' type="radio" value="Im_too_drunk_to_answer_sorry" /> I'm too drunk to answer, sorry  </li>

        </ul>





        <button type="submit">Pick your choice</button>

      </form>

    </div>
  )
}
