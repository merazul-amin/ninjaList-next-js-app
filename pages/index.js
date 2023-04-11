import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quibusdam eaque dicta commodi, harum vitae necessitatibus illum! Magni et laborum temporibus similique cumque, natus sequi voluptates, ad quaerat nesciunt molestiae?</p>
      <Link className={styles.btn} href='/ninjas'>See Ninja Listing</Link>
    </>
  )
}
