import React, { useEffect, useState } from 'react'

export default function Hero({}) {
 
    
  return (
    <div className='py-32 px-5 textWhite' >
      <div className="flexBox flex gap-8">
        <div className="left w-2/3">
          <h1 className='textWhite text-2xl font-medium'>Hello , my name is Prem</h1>
          <p className='textWhite text-5xl  mt-3 font-semibold'>I'am a <span className='textTheme'>Developer</span></p>
          <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum, quod necessitatibus quaerat incidunt adipisci illo quasi. Atque cupiditate fugiat nesciunt. Debitis asperiores mollitia sit ea soluta! Ratione, iste ad?</p>

          <a href="" className='px-6 py-2 rounded-md bgTheme inline-block mt-10'>Contact Me</a>
        </div>

      </div>

    </div>
  )
}
