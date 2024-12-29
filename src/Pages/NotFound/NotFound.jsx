import React from 'react';

function NotFound() {
  return (
    <>
      <div className='text-center items-center mt-5'>
        <h1 className='text-3xl text-red-800'>404 - Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" className='text-blue-600 under font-bold'>Go back to Home</a>
      </div>
    </>
  );
}

export default NotFound;