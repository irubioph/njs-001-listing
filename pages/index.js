import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <h1>Homepage</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi ea hic. Tempora, veniam repudiandae aperiam maxime ut exercitationem libero hic. Tenetur modi debitis eaque a! Recusandae fuga odio voluptatibus?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla veritatis maiores excepturi saepe quasi laborum dignissimos quod mollitia vel? Atque modi rem adipisci hic, aperiam alias nemo laborum cum temporibus!</p>
    
    <Link href="/listing">See Ivan Listing</Link>
   </div>
  )
}
