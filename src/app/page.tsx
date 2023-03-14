import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <ul>

          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutme">About me</Link></li>
          <li><Link href="/listenings">Listenings</Link></li>


      </ul>
    </main>
  )
}
