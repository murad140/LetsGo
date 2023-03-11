
'use client'

import { useRouter } from 'next/router'

export default function ListeningOnePage ({params}) {
  // const router = useRouter()
  // const id = router.query.id as string

  console.log(params)

  return (
    
    <div className="listeningOnePage">

      {params.id}

      listening one Page

      <iframe width="560" height="315" 
      src={`https://www.youtube.com/embed/${params.id}`}
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    </div>
  )
}
