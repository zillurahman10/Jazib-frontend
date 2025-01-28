import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Bounce, ToastContainer, toast } from "react-toastify";

function ProductDetails() {
  const param = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const [cart, setCart] = useState([]); // Cart state
  const [openRight, setOpenRight] = useState(false);

  // Fetch product details
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/products/${param.id}/`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error:", error));

    // Load the cart from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [param.id]);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1)); // Minimum is 1

  const handleAddToCart = (item) => {
    const itemWithQuantity = { ...item, quantity };
    const updatedCart = [...cart]; // Copy current cart

    // Check if the item already exists in the cart
    const existingItemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Update the quantity if the item exists
      updatedCart[existingItemIndex].quantity += quantity;
    } else {
      // Add the new item to the cart
      updatedCart.push(itemWithQuantity);
    }

    // Update cart state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload()
    // Show success notification
    // toast.success("Product added to cart successfully", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   theme: "light",
    //   transition: Bounce,
    // });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="flex flex-col lg:flex-row items-center justify-center m-5 gap-5">
        <img
          className="w-96 shadow-xl rounded-xl"
          src={product?.image}
          alt={product?.name || "Product"}
        />
        <div className="flex flex-col items-start max-w-md">
          <h3 className="text-2xl font-bold mb-3">{product?.name}</h3>
          <p className="mb-2">
            Price: <span className="font-bold">{product?.price} TK</span>
          </p>
          <p className="mb-2">Product Code: {product?.product_code}</p>
          <div className="flex">
            <div className="mr-5">
              <p className="mb-1">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={decrementQuantity}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <input
                  className="p-2 border rounded w-20 text-center"
                  value={quantity}
                  onChange={handleQuantityChange}
                  type="number"
                  min="1"
                />
                <button
                  onClick={incrementQuantity}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <Button className="mt-5" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          </div>
        </div>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              {product?.name}
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
              className="custom-animation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <Typography color="gray" className="mb-8 pr-4 font-normal">
            {product?.description}
          </Typography>
        </Drawer>
      </div>
    </>
  );
}

export default ProductDetails;
