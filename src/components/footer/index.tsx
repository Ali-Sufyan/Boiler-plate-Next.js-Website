
import { BigArrow } from '@/svg'
import React from 'react'

const Footer = () => {
  return (
    <section className='pt-10 lg:pt-14 bg-black-200'>
      <div className='container'>
        <h3 className='h4 text-white mb-5 md:mb-10'>INTERESTED IN LEARNING MORE? </h3>
       <div className='flex items-start gap-2'><h2 className='text-5xl sm:text-[4rem] lg:text-[6rem] text-white mb-10'>Connect with us</h2> <span className=''><svg className='w-[2.5rem] md:w-[3.5rem] lg:w-[4.5rem] h-[3.5rem] md:h-[4.5rem] lg:h-[4.5rem]' viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 81.5005L69 21.5005V75.2505H81.5V0.250488H6.5V12.7505H60.25L0.25 72.7505L9 81.5005Z" fill="white"/>
</svg></span></div>
      </div>
      <div className='py-10 border-t border-white'>
        <div className='container flex justify-between gap-10 flex-wrap'>
          <div>
            <span className='block text-gray mb-2 font-medium'>Legal</span>
            <span className='text-gray'>{"L’ART"} GROUP©2021</span>
          </div>
          <div>
            <span className='block text-white mb-2 font-medium'>info@lart-group.com</span>
            <span className='text-white'>+81 00 000000</span>
          </div>
          <div>
            <span className='block text-white mb-2 font-medium'>1 Chome-5-1 Ogigayatsu, Kamakura-shi,</span>
            <span className='text-white'>Kanagawa-ken 248-0011</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer