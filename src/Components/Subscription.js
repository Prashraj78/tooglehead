import React from 'react'
import img from '../Assests/mask.png'

const Subscription = () => {
    return (
        <div className='pt-24 sm:px-16 px-4 flex justify-between flex-wrap'>
            <div className='sm:w-[50%]'>

                <p className='font-bold  text-[#12406F]  text-xl' >Subscribe</p>
                <p className='py-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                <div className="flex flex-col sm:flex-row items-center">
                    <input
                        type="text"
                        className="w-full sm:w-auto sm:px-4 py-2  border border-gray-300 rounded mb-4 sm:mb-0 sm:py-2"
                        placeholder="Your email address"
                    />
                    <button className="bg-[#12406F] text-white p-2 rounded-lg px-4 ml-0 sm:ml-2 mt-2 sm:mt-0">
                        Subscribe Now
                    </button>
                </div>


            </div>
            <div className='sm:w-[45%]'>
                <img src={img} alt="" />
            </div>

        </div>
    )
}

export default Subscription
