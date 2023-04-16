import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '@/slices/basketSlice'
import CheckOutProduct from '@/components/CheckOutProduct'

function checkout() {
    const items =useSelector(selectItems)
   const set =new Set(items.map(item=>item.id))
   console.log(set)
  return (
    <div className='bg-gray-100 min-h-screen'>
    <Header />
    <main className='flex max-w-screen-2xl mx-auto lg:flex-row flex-col'>
        <div className='flex flex-col m-5 shadow-md flex-1'>
            <Image src={'https://links.papareact.com/ikj'}
            width={1020}
            height={250}
            objectFit='contain'
           
             />
             <div className='flex flex-col  flex-grow p-7 border-b bg-white space-y-7'>
                <h4 className='  border-b pb-8 font-bold text-2xl capitalize'>{!items.length? 'your basket is empty':'Shopping basket'}</h4>
                <div>
                    {[...set].map(item=>items.find(pro=>pro.id===item)).map((item,i)=><CheckOutProduct key={i} {...item}  />)}
                </div>
             </div>
        </div>
        <div className='m-5 w-[300px] bg-white shadow-md'>
            right
        </div>
    </main>
    </div>
  )
}

export default checkout