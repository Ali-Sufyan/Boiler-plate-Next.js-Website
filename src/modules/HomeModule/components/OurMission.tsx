import ImageComponent from '@/components/common/ImageComponent'
import React from 'react'

const OurMission = () => {
    return (
        <section className='container py-10 lg:py-24'>
            <h2 className="relative h2 mb-10 lg:mb-[4.5rem] font-bold after:content-[''] after:absolute after:w-[10%] after:h-[3px] after:bg-black-100 after:bottom-0 after:left-0">Our Mission</h2>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-24">
                <div className='lg:col-span-7'>
                    <p className='text-lg lg:text-xl'>We are on a mission to revolutionize the world of technology, e-commerce, and blockchain. We strive to empower individuals and businesses by delivering cutting-edge ventures that harness the power of innovation, seamless digital experiences, and the transformative potential of blockchain technology. With unwavering dedication, we are committed to driving growth, fostering collaboration, and creating opportunities that shape the future of these industries. Together, let's pioneer the path towards a technologically advanced and digitally empowered world.</p>
                </div>
                <div className='lg:col-span-4'>
                    <div className='grid grid-cols-3 gap-10'>
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/01.png'}
                            figClassName='w-full h-8 flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/02.svg'}
                            figClassName='w-full h-[62px] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/03.svg'}
                            figClassName='w-full h-[26px] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/04.svg'}
                            figClassName='w-full h-[67] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/05.svg'}
                            figClassName='w-full h-[62px] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/06.svg'}
                            figClassName='w-full h-[63px] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/07.svg'}
                            figClassName='w-full h-[69] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/08.svg'}
                            figClassName='w-full h-[63px] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                        <ImageComponent
                            alt='logo'
                            src={'/assets/images/our-mission/09.svg'}
                            figClassName='w-full h-[67px] flex items-center'
                            className='w-full'
                            fill={'fill'}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OurMission