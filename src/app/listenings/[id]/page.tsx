
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
          console.log(pair)
          console.log(`${pair[0]}, ${pair[1]}`);
          const questionName = pair[0];
          const userAnswer = pair[1];
          const rightAnswer = 'Zelinskogo_2'

          if (questionName === 'firstAnswer') {

            if (userAnswer === rightAnswer) {
              alert("Well done, you're Zuich")
            } else {
              alert("Dumbshit, the fuck do you know about Zuich? Nothing!")
            }

          }



        }


        console.log(formData)
      }}>

        <p>Zuich likes India but he has never visited it and he dreams of Pakistan every second while sleeping on bench near Zelinskogo 2.</p>

        <p>Where does Zuich live?</p>

        <ul>

          <li> <input name='firstAnswer' type="radio" value="Pakistan" /> Pakisktan </li>
          <li> <input name='firstAnswer' type="radio" value="India" /> India </li>
          <li> <input name='firstAnswer' type="radio" value="Zelinskogo_2" /> Zelinskogo 2 </li>

        </ul>

        <button type="submit">Pick your choice</button>

      </form>

    </div>
  )
}
