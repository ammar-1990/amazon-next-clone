import React from 'react'
import Header from '@/components/Header'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'

const success = () => {
    const router=useRouter()
  return (
    
    <div className='bg-gray-100 h-screen'>
    <Header />

    <main className='bg-white max-w-screen-lg  p-12 mx-auto'>
        <div className='flex gap-3 items-center'>
            <CheckCircleIcon className='text-green-400 h-12' />
            <h1 className='font-bold'>Thank you, your order has been confirmed !</h1>
        </div>
        <p className='my-5'>Thank you for shopping with us, We will send you confirmation once your item has shipped , if you would like to check the status of you order(s) mplease press the link below.</p>
        <button onClick={()=>router.push('/orders')} className='button w-full '>Go to my orders</button>


    </main>

        
    </div>
  )
}

export default success