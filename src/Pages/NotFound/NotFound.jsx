import React from 'react';
import photo1 from "../../assets/download (2).jpeg";
import ReactImageMagnify from "react-image-magnify";

function NotFound() {
  return (
    <>
      <div className='text-center items-center mt-5'>
        <h1 className='text-3xl text-red-800'>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" className='text-blue-600 under font-bold'>Go back to Home</a>
      </div>

      <div
          style={{
            marginRight: "100px",
            marginLeft: "200px",
            display: "inline-block",
            position: "relative",
            width: '400px'
          }}
        >
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                // width: 100,
                src: photo1,
              },
              largeImage: {
                src: photo1,
                width: 1440,
                height: 1620,
              },
            }}
          />
        </div>
    </>
  );
}

export default NotFound;