import { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  // Load items from localStorage and initialize state
  const storedItems = localStorage.getItem("cart");
  const [cartItems, setCartItems] = useState(JSON.parse(storedItems) || []);

  // Calculate subtotal dynamically
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  // Function to handle delete
  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id); // Filter out the deleted item
    setCartItems(updatedCart); // Update the state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
  };

  return (
    <>
      <div className="flex justify-center mx-5">
        <div style={{ width: "50%", marginRight: "50px" }}>
          <p className="mt-5 mb-2">Your Products ({cartItems.length} Items)</p>
          <div className="divider"></div>
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className="flex">
                  <div>
                    <img
                      className="rounded"
                      style={{ width: "130px", marginRight: "40px" }}
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div style={{ width: "550px" }}>
                    <h3 className="mb-3 mt-2 text-xl">{item.name}</h3>
                    <p className="mb-3">Quantity: {item.quantity}</p>
                    <p className="mb-3">
                      Price: Tk {Number(item.price) * item.quantity}
                    </p>
                    <div
                      className="flex justify-end text-red-500 cursor-pointer"
                      onClick={() => handleDelete(item.id)} // Attach delete handler
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 25"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="divider"></div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "60px" }}>
          <div className="flex justify-end">
            <Link to="/checkout">
              <button className="bg-gray-400 checkout-btn">CHECKOUT</button>
            </Link>
          </div>
          <div className="divider"></div>
          <h2 className="text-xl">Order Summary</h2>
          <div className="divider"></div>
          <div className="bg-base-200 p-3">
            <div className="flex justify-between mx-2">
              <p>Subtotal</p>
              <p>Tk {subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mx-2">
              <p>Shipping Charge</p>
              <p>Tk 60.00</p>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between mx-2">
              <p>Total</p>
              <p>Tk {(subtotal + 60).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
