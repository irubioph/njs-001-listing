import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi ea hic. Tempora, veniam repudiandae aperiam maxime ut exercitationem libero hic. Tenetur modi debitis eaque a! Recusandae fuga odio voluptatibus?</p>
    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis maiores excepturi saepe quasi laborum dignissimos quod mollitia vel? Atque modi rem adipisci hic, aperiam alias nemo laborum cum temporibus!</p>

    <Link href="/listing" className={styles.btn}>See Ivan Listing</Link>
    </div>
  )
}
