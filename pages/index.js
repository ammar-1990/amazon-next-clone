import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Products from '@/components/Products'
import { useEffect } from 'react'
import { addToBasket, selectItems } from '@/slices/basketSlice'
import { useDispatch, useSelector } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {



  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon 2.0</title>
        <meta name="description" content="Amazon clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/small-logo.png" />
      </Head>
<Header />
<main className='max-w-screen-2xl mx-auto'>
  <Banner />
  <Products data={data} />

</main>
    </div>
  )
}


export async function getServerSideProps(){
const data = await fetch('https://fakestoreapi.com/products').then(response=>response.json())


return {props:{data}}
}