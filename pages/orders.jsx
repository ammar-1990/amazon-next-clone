import React from 'react'
import Header from '@/components/Header'
import { useSelector } from 'react-redux'
import { selectOrders } from '@/slices/basketSlice'
import Order from '@/components/Order'

const orders = () => {
    const orders = useSelector(selectOrders)
  return (
    <div className='min-h-screen bg-gray-100'>
        <Header />

        <main className='bg-white mx-auto max-w-screen-lg p-8'>
           <h1 className='text-2xl border-b border-yellow-500'>Your Orders</h1>
           <span>{orders?.length} orders(s)</span>

           <div>
            {orders.map(el=> <Order {...el} />)}
           </div>
        </main>
    </div>
  )
}

export default orders