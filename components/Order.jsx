import React from 'react'

const Order = ({id,date,data}) => {

    const total= data.reduce((total,item)=> total + item.price,0).toFixed(2)
  return (
    <div className='my-3 border border-gray-300'>
        <div className='bg-gray-200 p-4 flex gap-5 flex-col sm:flex-row items-center'>
<div className='text-xs text-gray-700'>
<h4 className='mb-2 font-semibold'>ORDER PLACED</h4>
<span className=''>{date}</span>
</div>
<div className='text-xs text-gray-700 sm:ml-28'>
<h4 className='mb-2 font-semibold'>TOTAL</h4>
<span>$ {total}</span>
</div>
<div className='sm:ml-auto sm:self-end text-blue-400 font-semibold'>
{data.length}  Item(s)
</div>

        </div>
       <div className='flex gap-3 overflow-x-auto p-3'>
{data.map((el,i)=><img key={i} src={el.image} className='w-[150px] aspect-square object-contain' />)}
       </div>
    </div>
  )
}

export default Order