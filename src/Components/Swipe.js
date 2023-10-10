import { BiSolidChevronRightCircle } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

export default function Swipe() {
    const data = [
        {
          title: 'Lorem ipsum 1',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod1',
        },
        {
          title: 'Lorem ipsum 2',
          description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod2',
        },
        {
            title: 'Lorem ipsum 1',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod1',
          },
          {
            title: 'Lorem ipsum 2',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod2',
          },
          {
            title: 'Lorem ipsum 1',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod1',
          },
          {
            title: 'Lorem ipsum 2',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod2',
          },
  
      ];
  return (
    <div className='sm:mx-11 mt-8'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='m-4'>
              <div className='rounded-md bg-[#12406F] p-4 '>
                <p className='text-white text-base my-4'>{item.title}</p>
                <p className='text-sm text-white'>{item.description}</p>
                <div className='flex my-4'>
                  <p className='text-white text-base '> Know More</p>
                  <BiSolidChevronRightCircle className='text-white mt-[2px] ml-2 h-6 w-6' />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
