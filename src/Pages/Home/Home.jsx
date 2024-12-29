import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';

function Home() {
  return (
    <>
      <Banner></Banner>
      <h2 className='text-center mt-3 text-3xl font-bold'>Whats new !</h2>
      <Carousel></Carousel>
    </>
  );
}

export default Home;
