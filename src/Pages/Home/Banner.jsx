import BannerImg from '../../assets/banner1.png'
function Banner() {
  return (
    <>
    <div className='flex justify-center mt-3' style={{marginRight: '60px', marginLeft: '60px'}}>
      <img className="rounded-xl" src={BannerImg} alt="" />
    </div>
    </>
  );
}

export default Banner;
