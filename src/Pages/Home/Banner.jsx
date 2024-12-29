import BannerImg from '../../assets/banner.jpg'
function Banner() {
  return (
    <>
    <div className='flex justify-center mt-3'>
      <img className="rounded-xl" src={BannerImg} alt="" />
    </div>
    </>
  );
}

export default Banner;
