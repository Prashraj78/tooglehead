import React from 'react';
import headImg from '../Assests/head.png';
import { BsPlay as FiPlay } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='pt-[73px] bg-[#F6F6F6]'>
            <div className='container ml-auto'>
                <div className='flex flex-col-reverse sm:flex-row items-center justify-between'>
                    <div className='sm:w-[30%] w-[100%] p-4'>
                        <p className='text-xl font-semibold my-3 text-[#12406F] text-center sm:text-left'>Lorem Ipsum</p>
                        <p className='text-center sm:text-left text-sm sm:text-base'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugiat earum dignissimos ex fuga velit aspernatur sapiente architecto neque, eius quos tempore dicta accusamus possimus error id iusto voluptate.
                        </p>
                        <button className='my-2 bg-[#12406F] text-white px-3 py-2 rounded-md flex'>
                            Know more <FiPlay className='mt-1 h-6 w-6' />
                        </button>
                    </div>
                    <div className='flex justify-center sm:justify-end mt-4 sm:mt-0 sm:w-[35%]'>
                        <img src={headImg} alt="" className='w-32 h-32 sm:w-auto sm:h-auto hidden sm:block' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
