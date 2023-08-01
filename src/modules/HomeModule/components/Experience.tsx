import React from 'react'

const Experience = () => {
    return (
        <section className='bg-black-200 py-10 lg:py-24'>
            <div className="container">
                <div className="grid gap-10 lg:gap-20 lg:grid-cols-12">
                    <div className='lg:col-span-7'>
                        <h2 className='text-white mb-7'>Experience the Future of Web3.0 with {'L’ART'}</h2>
                        <p className='text-lg lg:text-xl text-white'>Present-day Web3.0 still remains largely virtual for most consumers due to the limitations of existing crypto tokens based on blockchain technology. For example, Fungible Tokens (FT) and Non-Fungible Tokens (NFT) are currently unable to link physical mass-produced goods or services. However, by exploring innovative collaborations between existing blockchain technologies, we can bring efficiency and transparency to the physical world’s economic market.</p>
                    </div>
                    <div className='lg:col-span-5 flex gap-10 lg:gap-0 flex-col justify-between items-center lg:items-end'>
                        <div>
                        <h2 className='text-white text-[6rem] font-bold textStyle text-center'>$20M+</h2>
                        <span className=' text-white'>Supporting Commercial Programs Ranging from $1M – $20M+</span>
                        </div>
                        <div className='grid gap-5 grid-cols-3'>
                            <div className='flex flex-col items-center text-center'>
                                <p className='text-4xl text-white mb-2'>98%</p>
                                <span className='text-white text-xs'>Success Rate</span>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <p className='text-4xl text-white mb-2'>3+</p>
                                <span className='text-white text-xs'>Technology Ventures</span>
                            </div>
                            <div className='flex flex-col items-center text-center'>
                                <p className='text-4xl text-white mb-2'>97%</p>
                                <span className='text-white text-xs'>Customer Satisfaction Rating</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience