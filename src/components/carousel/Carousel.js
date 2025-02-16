import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css';

// Import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import StyledLgText from '../../common/components/styledLgText/StyledLgText';

const swiperData = [
    {
        name: 'Weed Dreamer',
        image: '/assets/images/nft-1.webp'
    },
    {
        name: 'Ganja Vision',
        image: '/assets/images/nft-2.webp'
    },
    {
        name: 'Marijuana Magic',
        image: '/assets/images/nft-3.webp'
    },
    {
        name: 'Cannabis Chronicles',
        image: '/assets/images/nft-4.webp'
    },
    {
        name: 'Sativa Symphony',
        image: '/assets/images/nft-5.webp'
    },
    {
        name: 'Indica Illusions',
        image: '/assets/images/nft-6.webp'
    },
    {
        name: 'Pot Paradise',
        image: '/assets/images/nft-7.webp'
    },
    {
        name: 'Weed Wonders',
        image: '/assets/images/nft-8.webp'
    },
    {
        name: 'High Hopes',
        image: '/assets/images/nft-9.webp'
    },
    {
        name: 'Blaze of Glory',
        image: '/assets/images/nft-10.webp'
    },
    {
        name: 'Green Goddess',
        image: '/assets/images/nft-11.webp'
    },
    {
        name: 'Stoners Sanctuary',
        image: '/assets/images/nft-12.webp'
    },
    {
        name: 'Rolling Relief',
        image: '/assets/images/nft-13.webp'
    },
    {
        name: 'Mary Jane Majesty',
        image: '/assets/images/nft-14.webp'
    },
    {
        name: 'Hashish Haven',
        image: '/assets/images/nft-15.webp'
    },
    {
        name: 'Kush Kingdom',
        image: '/assets/images/nft-16.webp'
    },
    {
        name: 'Psychedelic Plantation',
        image: '/assets/images/nft-17.webp'
    },
    {
        name: 'Dank Dynasty',
        image: '/assets/images/nft-18.webp'
    },
];


export default function Carousel() {
    return (
        <Swiper
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={2}
            coverflowEffect={{
                rotate: 25,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={{
                prevEl: '.swiper-button-previous-custom',
                nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
        >
            {
                swiperData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex flex-col gap-4 p-3 rounded-3xl bg-gray'>
                            <div>
                                <img className='rounded-3xl' src={item.image} alt='NFT' />
                            </div>
                            <div className='flex justify-center'>
                                <StyledLgText fontColor="text-white">{item.name}</StyledLgText>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
            <div className="absolute cursor-pointer left-1 top-[45%] z-20 swiper-button-previous-custom hover:scale-105 duration-500">
                <img src="/assets/icons/prev.png" alt="Previous" />
            </div>
            <div className="absolute cursor-pointer right-1 top-[45%] z-20 swiper-button-next-custom hover:scale-105 duration-500">
                <img src="/assets/icons/next.png" alt="Next" />
            </div>
        </Swiper>
    );
}
