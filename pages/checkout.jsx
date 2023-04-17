import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { resetBasket, selectItems, selectTotal } from '@/slices/basketSlice'
import CheckOutProduct from '@/components/CheckOutProduct'
import { addToOrders } from '@/slices/basketSlice'
import { useRouter } from 'next/router'
function checkout() {
    const items =useSelector(selectItems)
    const total = useSelector(selectTotal)
   const set =new Set(items.map(item=>item.id))
   const dispatch=useDispatch()
const router = useRouter()
const handlePayment=()=>{
    dispatch(addToOrders())
    router.push('/success')
    dispatch(resetBasket())
}
  return (
    <div className='bg-gray-100 min-h-screen'>
    <Header />
    <main className='flex max-w-screen-2xl mx-auto lg:flex-row flex-col'>
        <div className='flex flex-col m-5 shadow-md flex-1'>
            <Image src={'https://links.papareact.com/ikj'}
            width={1200}
            height={250}
            objectFit='contain'
          
           
             />
             <div className='flex flex-col  flex-grow p-7 pb-0 border-b bg-white space-y-7'>
                <h4 className='  border-b pb-8 font-bold text-2xl capitalize'>{!items.length? 'your basket is empty':'Shopping basket'}</h4>
                <div>
                    {[...set].map(item=>items.find(pro=>pro.id===item)).map((item,i)=><CheckOutProduct key={i} {...item}  />)}
                </div>
             </div>
        </div>
        <div className='m-5 lg:w-[300px] bg-white shadow-md p-5'>
           <p className='font-bold'>SubTotla {`(${items.length} ${items.length===1 ? 'items' : 'items'}):`} ${total} </p>
           <button onClick={handlePayment} disabled={items.length===0} className={`button mt-5 w-full ${items.length===0 && 'opacity-40 cursor-not-allowed'}`}>Pay</button>
        </div>
    </main>
    </div>
  )
}

export default checkout