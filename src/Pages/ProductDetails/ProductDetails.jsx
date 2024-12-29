import React from "react";
import photo1 from "../../assets/photo1.jpg";
import { Button } from "@material-tailwind/react";

function ProductDetails() {
  return (
    <>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 m-5">
        <div style={{marginRight: '100px', marginLeft: '200px'}}>
          <img src={photo1} alt="" />
        </div>
        <div>
          <div className="mt-5">
            <br />
            <h3 className="m-5 text-2xl font-bold">Hello Hello Hello Hello</h3>
            <p className="m-5">Price: <span className="font-bold">2200TK</span></p>
            <p className="m-5">Product Code: A55T94</p>
            <p className="m-5">
              <span className="mr-2">Color:</span> 
              <button style={{
                border: '1px solid black',
                padding: '2px 7px',
                cursor: 'pointer',
                marginRight: '7px',
              }}>Grey</button> 
              <button style={{
                border: '1px solid black',
                padding: '2px 7px',
                cursor: 'pointer',
                marginRight: '7px',
              }}>Red</button> 
              <button style={{
                border: '1px solid black',
                padding: '2px 7px',
                cursor: 'pointer',
                marginRight: '7px',
              }}>Blue</button>
            </p>
            <div className="m-3">
                <p className="font-bold">Size</p>
                <button className="m-2" style={
                    {
                        border: '1px solid black',
                        padding: '5px 10px',
                        
                    }
                }>S</button>
                <button className="m-2"  style={
                    {
                        border: '1px solid black',
                        padding: '5px 10px'
                    }
                }>M</button>
                <button className="m-2"  style={
                    {
                        border: '1px solid black',
                        padding: '5px 10px',

                    }
                }>L</button>
                <button className="m-2"  style={
                    {
                        border: '1px solid black',
                        padding: '5px 10px'
                    }
                }>XL</button>
            </div>
            <div className="m-5">
                <p className="mb-1">Quantity</p>
                <input className="mr-3 p-2" style={{width: '100px', border: '1px solid black', borderRadius: '5px'}} defaultValue={'1'} placeholder="Quantity" type="number" name="quantity" id="" />
                <Button>Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
