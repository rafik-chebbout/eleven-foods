import React from 'react'

function headlinecards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      {/*card*/}
      <div className='rounded-xl relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>sun's out,  BOGO's out</p>
            <p className='px-2'>trough 8/26</p>
            <button className='border-whote bg-white text-black mx-2 absolute bottom-4'>order now</button>
        </div>
        <img  className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl' src="../assets/brgr.jpg" alt="" />
      </div>


      <div className='rounded-xl relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>new restaurant</p>
            <p className='px-2'>added daily</p>
            <button className='border-whote bg-white text-black mx-2 absolute bottom-4'>order now</button>
        </div>
        <img  className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl' src="../assets/dessets.jpg" alt="" />
      </div>


      <div className='rounded-xl relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 '>we deliver desserts too</p>
            <p className='px-2'>tasty treats</p>
            <button className='border-whote bg-white text-black mx-2 absolute bottom-4'>order now</button>
        </div>
        <img  className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl' src="../assets/pizza.jpg" alt="" />
      </div>
    </div>
  )
}

export default headlinecards
