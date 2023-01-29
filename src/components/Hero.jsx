import React from 'react'


function Hero() {
  return (
    <div className='max-w-{1640px} mx-auto p-4 '>
      <div className='max-h-{1500px} relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full text-gray-200 max-h-{500px} bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>the <span className='text-orange-500'>best</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>food </span>Delivered</h1>
        </div>
        <img src="./assets/brgr.jpg" alt="" className='w-full max-h-[500px] object-cover ' />
      </div>
    </div>
  )
}

export default Hero
