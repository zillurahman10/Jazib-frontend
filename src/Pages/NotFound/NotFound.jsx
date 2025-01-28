import React from "react";
import photo1 from "../../assets/download (2).jpeg";
import ReactImageMagnify from "react-image-magnify";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function NotFound() {
  return (
    <>
      <div className="text-center items-center mt-5">
        <h1 className="text-3xl text-red-800">404 - Page Not Found</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/" className="text-blue-600 under font-bold">
          Go back to Home
        </a>
      </div>

      <TransformWrapper>
        <TransformComponent>
          <img src="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0" alt="test" />
        </TransformComponent>
      </TransformWrapper>
    </>
  );
}

export default NotFound;
