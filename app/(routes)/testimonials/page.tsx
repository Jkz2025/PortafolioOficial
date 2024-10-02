'use client'
import TransitionPage from "@/app/components/transition-page";
import CircleImage from "@/app/components/circle-image";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { dataTestimonials } from "@/app/data";

const TestimonialsPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="flex flex-col justify-center h-lvh">
        <CircleImage />
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
          Algunos comentarios de{" "}
          <span className="block font-bold text-secondary">
            nuestros clientes
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <div>
          <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,  // corrected from slidesPrevier
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[380px] md:h-[300px] w-[270px] md:w-[550px]"
    >
     {dataTestimonials.map(({id, name, description, imageUrl}) => (
        <SwiperSlide
        key={id}>
            <Image src={imageUrl} alt={name} width={100} height={100} className='mx-auto rounded-full' />
            <h4 className="text-center">{name} </h4>
            <p className="mt-5 text-center">{description} </p>
        </SwiperSlide>
     ))}
    </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;
