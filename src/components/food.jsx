import React, { useState } from 'react'
import { categories, data } from '../data/data'

const Food = () => {
 
const [Foods, setFoods] =useState(data)

//filter type burgers/pizza ...
const fillterType =(category) => {
    setFoods(
        data.filter((item) =>{
            return item.category ===category
        })
    )
}

//filter by price

const fillterPrice = (price) => {
    setFoods(
        data.filter((item) =>{
            return item.price ===price
        })
    )
}

  return (
    <div className='max-w-{1640px} m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>top rated menu items</h1>
      {/*filter*/}
      <div className='flex flex-col lg:flex-row justify-between '>
        {/*filter type*/}
        <div>
            <p className='font-bold text-gray-700 '>filter type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setFoods(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>all</button>
                <button onClick={()=>fillterType('burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>burger</button>
                <button onClick={()=>fillterType('pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>pizza</button>
                <button onClick={()=>fillterType('salad')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>salads</button>
                <button onClick={()=>fillterType('chicken')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>chicken</button>
            </div>
        </div>
        {/*filter price*/}
        <div>
            <p className='font-bold text-gray-700 '>filter price</p>
            <div className='flex justify-between max-w-{390px} w-full'>
                <button onClick={()=>fillterPrice('$')}  className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$</button>
                <button onClick={()=>fillterPrice('$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$$</button>
                <button onClick={()=>fillterPrice('$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$$$</button>
                <button onClick={()=>fillterPrice('$$$$')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white  m-1'>$$$$$</button>
            </div>
        </div>
      </div>
            {/*display foods*/}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 '>
        {Foods.map((item, index)=>(
            <div key={index} className='rounded-lg border shadow-lg hover:scale-105 duration-300'>
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold '>{item.name}</p>
                    <p><span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Food
