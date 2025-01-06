import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import NewArrival from './NewArrival';
import Testimonial from './Testimonial';

function Home() {
  return (
    <>
      <Banner></Banner>
      <h2 className='text-center mt-3 text-3xl font-bold'>Whats new !</h2>
      <Carousel></Carousel>
      <h1 className="text-center text-3xl">Our New Arrival !</h1>
      <NewArrival></NewArrival>
      <h1 className='text-center text-3xl m-5' style={{marginTop: '80px'}}>Our Testimonial!</h1>
      <Testimonial></Testimonial>
    </>
  );
}

export default Home;
