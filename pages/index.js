import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <h1>Homepage</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi ea hic. Tempora, veniam repudiandae aperiam maxime ut exercitationem libero hic. Tenetur modi debitis eaque a! Recusandae fuga odio voluptatibus?</p>
   </div>
  )
}
