import React from 'react'
import Image from 'next/image'
import { StarIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectItems } from '@/slices/basketSlice'



const CheckOutProduct = ({ id,
    title,price,description,category,image,hasPrime,rate}) => {
        const dispatch=useDispatch()
        const items=useSelector(selectItems)
        

        const addItem=()=>{
        const product={id,
            title,price,description,category,image,hasPrime,rate}      
dispatch(addToBasket(product))
        }

        const removeItem=()=>{
            dispatch(removeFromBasket(id))
        }
  return (
    <div className='grid md:grid-cols-5 md:space-x-4 mb-[40px] last-of-type:mb-0 items-center gap-6 pb-8 border-b'>
        <div className='relative col-span-2  md:col-span-1  aspect-square'>
        <Image src={image} fill objectFit='contain' alt='product image'/>
        </div>
        <div className='flex flex-col gap-3 col-span-2'>
        <p>{title}</p>
        <div className='flex gap-2'>
            {Array(rate).fill().map((_,i)=><StarIcon  key={i} className='text-yellow-500 h-6'/>)}
        </div>
        <p className='text-xs '>{description}</p>
        <p className='font-bold'>${price}</p>
        {hasPrime && <div className='flex items-center gap-4 '>
            <img loading='lazy' src="https://links.papareact.com/fdw" className='w-12' alt="" />
            <p className='text-xs'>FREE Next day delivery</p>
            </div>}
        </div>
        <div className='flex flex-col gap-3 col-span-2 p-4 '>
            <span className='text-center font-bold'>Amount {items?.filter(item=>item.id===id).length}</span>
            <button onClick={addItem} className='button text-xs'>Add to basket</button>
            <button onClick={removeItem} className='button text-xs'>Remove from basket</button>
        </div>
      
       
    </div>
  )
}

export default CheckOutProduct