import React from 'react';
import footerImg from '../Assests/footerImg.png';
import { ImFacebook } from 'react-icons/im';
import {AiFillLinkedin, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai';
import {BsYoutube, BsQuora} from 'react-icons/bs';
import {MdLocationOn as FaLocationDot} from 'react-icons/md';
import {CiStopwatch} from 'react-icons/ci';
import {BiTrain} from 'react-icons/bi';
 
const Footer = () => {
  return (
    <div className=''>
      <div
        className="bg-cover bg-center bg-no-repeat sm:px-10"
        style={{
          backgroundImage: `url(${footerImg})`,
        }}
      >
        <div className="container mx-auto py-10 sm:py-16 px-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="sm:w-1/3 text-center sm:text-left">
              <p className="text-white font-semibold">Contact us</p>
              <p className="text-white mt-10 ">
                Address: amet, consetetur sadipscing elitr, sed diam Email id: eirmod tempor invidunt ut labore et dolore Phone no: 123456789
              </p>
            </div>
            <div className="sm:w-1/3 text-center sm:text-left">
              <p className="text-white font-semibold text-center">Follow us</p>
              <div className="flex justify-center mt-10">
                <ImFacebook className="text-white w-6 h-12 mr-4" />
                <AiFillLinkedin className="text-white w-6 h-12 mr-4" />
                <AiOutlineInstagram className="text-white w-6 h-12 mr-4" />
                <AiOutlineTwitter className="text-white w-6 h-12 mr-4" />
                <BsYoutube className="text-white w-6 h-12 mr-4" />
                <BsQuora className="text-white w-6 h-12 mr-4" />
              </div>
            </div>

            <div className="sm:w-1/3 text-center sm:text-left">
              <p className="text-white font-semibold ml-2">Head office</p>
              <div className="text-white mt-10">
              <div className='flex'>
                <FaLocationDot className='mb-[1px] w-[36px] h-[50px] mr-2'/>
                <p className='text-sm text-c mt-1'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
              </div>
              <div className='flex'>
              <CiStopwatch className='mb-[1px] w-[20px] h-[26px] mr-2'/>
                <p className='text-sm text-c'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
              </div>
              <div className='flex'>
              <CiStopwatch className='mb-[1px] w-[20px] h-[26px] mr-2'/>
                <p className='text-sm text-c'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
              </div>
              <div className='flex'>
                <BiTrain className='mb-[1px] w-[20px] h-[26px] mr-2'/>
                <p className='text-sm text-c'>Lorem ipsum asd asdsaweeq Lorem Ipsum</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#002F5F] text-center text-white py-2">© 2023 All Rights Reserved. Privacy Policy</div>
    </div>
  )
}

export default Footer
