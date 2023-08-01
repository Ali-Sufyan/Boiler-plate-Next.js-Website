import { KeepUpData } from '@/data/KeepUpData'
import { Arrow } from '@/svg'
import React from 'react'

const KeepUp = () => {
    return (
        <section className='py-10 lg:py-24 bg-white'>
            <div className="container">
                <h2 className='font-bold mb-[4.5rem]'>Keep up with our latest news</h2>
                {KeepUpData.map((item, i) => (
                    <div className='grid grid-cols-12 py-7 border-t border-b border-[#D0D0D0]'>
                        <h4 className='col-span-3 font-bold'>
                            {item.date}
                        </h4>
                        <span className='h4 col-span-6'>{item.update}</span>
                        <span className='col-span-3 flex justify-end'>
                            <Arrow />
                        </span>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default KeepUp