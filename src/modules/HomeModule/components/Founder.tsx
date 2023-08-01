import ImageComponent from '@/components/common/ImageComponent'
import { RightArrow } from '@/svg'
import Link from 'next/link'
import React from 'react'

const Founder = () => {
    return (
        <section className='bg-black-100 py-10 lg:py-24'>
            <div className="container">
                <div className="grid gap-10 md:gap-16 xl:gap-28 sm:grid-cols-12">
                    <ImageComponent
                        src='/assets/images/founder/founder.png'
                        width={458} height={513}
                        figClassName='sm:col-span-5'
                        className='sm:w-full w-[60%]'
                    />
                    <div className='sm:col-span-7'>
                        <div>
                            <h2 className='text-white font-bold'>Yuya Takahashi</h2>
                            <h4 className='h4 text-white block mb-8'>Founder & CEO</h4>
                            <p className='text-lg lg:text-xl text-white mb-6'>Lorem ipsum dolor sit amet consectetur. Parturient lorem volutpat eget felis sed laoreet eu ullamcorper. Blandit est pellentesque volutpat id congue ipsum egestas molestie aliquet. Vitae imperdiet egestas eget interdum est in dolor id amet. Eget dapibus in imperdiet morbi elit purus dui.</p>
                            <h5 className='h3 text-white mb-[0.875rem]'>{'"We wholeheartedly embrace the seemingly impossible, for it is through conquering the insurmountable that we unlock our greatest assets and triumph over challenges."'}</h5>
                          <div className='flex items-center gap-4'><Link href="" className='text-[#E1B45E] text-xl  border-b'>Learn more about Yuya</Link> <RightArrow/></div> 
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Founder