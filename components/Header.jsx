import React from 'react'
import Image from 'next/image'
import {MagnifyingGlassIcon }  from '@heroicons/react/24/outline'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import {Bars3Icon} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { useSelector,useDispatch } from 'react-redux'
import { addToBasket, initialItems, selectItems,initialOrders, selectOrders } from '@/slices/basketSlice'
import { useEffect } from 'react'



const Header = () => {


    const router = useRouter()
    const items=useSelector(selectItems)
    const orders=useSelector(selectOrders)


 
    const dispatch=useDispatch()
  useEffect(()=>{
      const myOrders=JSON.parse(localStorage.getItem('orders'))
      if(myOrders?.length > 0 && orders.length===0){
        console.log('done')
    dispatch(initialOrders(myOrders))}
    else{console.log('no')}

    const products=JSON.parse(localStorage.getItem('items'))
    console.log(products)
    if(products?.length > 0 && items.length===0){
        console.log('done')
    dispatch(initialItems(products))}
    else{console.log('no')}
    
    
  },[])
  return (
    <header >
       <div
       className='flex items-center bg-amazon_blue p-1 py-2 justify-between'
       >
<div onClick={()=>router.push('/')}>
<Image src={'/assets/amazon.png'} 
width={150}
height={40}
objectFit='contain'
className='cursor-pointer'
alt='amazon logo'
/>
</div>

<div className=' hidden sm:flex flex-1 ml-6 h-10 bg-yellow-400 items-center rounded-lg overflow-hidden hover:bg-yellow-500 cursor-pointer '>
    <input type="text" className='py-4 text-base px-6 focus:outline-0 flex-grow flex-shrink w-6' />
    <MagnifyingGlassIcon   className='p-4 h-12 text-black' />
</div>

<div className='flex space-x-6 mx-6 text-white text-xs items-center whitespace-nowrap'>
    <div className='link'>
        <p>Hello Ammar Haidar</p>
        <p>Account & lists</p>
    </div>
    <div onClick={()=>router.push('/orders')} className='link'>
         <p>Returns</p>
    <p>&Orders</p>
    </div>
   
    <div onClick={()=>router.push('/checkout')} className='link relative flex items-center'>
    
        <ShoppingCartIcon className='h-8 text-white ' />
        <p className='hidden sm:inline mt-2 '>Basket</p>
        <div className='bg-yellow-400 w-3 h-3 p-2 text-black font-bold top-[-4px] right-[-4px] sm:right-10 absolute rounded-full flex items-center justify-center'>{items.length}</div>
    </div>
    
</div>


       </div>
       {/* bottom */}
       <div className='bg-amazon_blue-light text-white flex items-center space-x-6 p-2 pl-6'>

<p className='flex cursor-pointer hover:underline items-center '>
    <Bars3Icon className='h-6' />
    All
</p>
<p className='link'>Prime Video</p>
<p className='link'>Amazon Business</p>
<p className='link'>Today's Deals</p>
<p className='link hidden lg:block'>Electronice</p>
<p className='link hidden lg:block'>Food & Grocery</p>
<p className='link hidden lg:block'>Prime</p>
<p className='link hidden lg:block'>Buy Again</p>
<p className='link hidden lg:block'>Shopper Toolkit</p>
<p className='link hidden lg:block'>Health & Personal Care</p>
       </div>
        </header>
  )
}

export default Header