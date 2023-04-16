
import Image from "next/image"
import { useEffect, useState } from "react"
import { StarIcon } from "@heroicons/react/24/solid"
import { useDispatch } from "react-redux"
import { addToBasket } from "@/slices/basketSlice"

export const crop=(text,check)=>{
    if(check){
        return  `${text.slice(0,200)}...`
    }
    else if(text.length<50)
    return text
    else{
        return `${text.slice(0,50)}...`
    }
    }

const Product = ({id,title,price,description,category,image}) => {

const MAX_RATE=5
const MIN_RATE=1
    const [rate,setRate]=useState('')
    const [hasPrime,setHasPrime]=useState('')

    useEffect(()=>{setRate(Math.floor(Math.random()  * (MAX_RATE - MIN_RATE +1 ) ) + MIN_RATE)},[])
    useEffect(()=>{setHasPrime(Math.random() > 0.5)},[])

const dispatch=useDispatch()
const addItem=()=> {
    const product ={
        id,
        title,price,description,category,image,hasPrime,rate
    }

dispatch(addToBasket(product))
}

  return (
<div key={id} className= "relative bg-white flex flex-col  p-10 m-5 z-30 min-h-[600px]">
    <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
  
 <img loading="lazy" src={image} className="w-[200px] h-[200px] self-center object-contain"  />
   
    <h4 className="my-3 text-sm font-semibold">{title}</h4>
    <div className="flex">
{Array(rate).fill().map((_,i)=><StarIcon key={i} className="h-5 text-yellow-500" />)}

    </div>
    <p className="my-4 text-xs">{crop(description)}</p>
   
    
   <p className="my-5 font-bold">$ {price} </p>
   {hasPrime && <div className="flex items-center gap-4 mb-3">
    <img className="w-12" src="https://links.papareact.com/fdw" />
    <p className="text-xs text-gray-500">FREE Next-day delivery</p>
    </div>}
    <button onClick={addItem} className="button mt-auto">Add to basket</button>
</div>
  )
}

export default Product