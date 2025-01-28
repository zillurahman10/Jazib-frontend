import { Input, Radio } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import "./Checkout.css";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [deliveryCharge] = useState(60); // Set delivery charge here or make it dynamic
  const [total, setTotal] = useState(0);

  // State for the selected payment method
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    // Retrieve the cart from localStorage and calculate totals
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);

    const calculatedSubtotal = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal + deliveryCharge);
  }, [deliveryCharge]);

  const handlePaymentChange = (e) => {
    // Update the selected payment method when a radio button is selected
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const phone_number = event.target.number.value;
    const address = event.target.address.value;
    const transactionId = event.target.transactionId?.value || ""; // Optional field
    const selectedPaymentMethod = paymentMethod;
    const productCart = cart; // State variable for payment method

    // Optional validation for transactionId
    if (selectedPaymentMethod === "bkash" && !transactionId) {
      alert("Please provide a Transaction ID for Bkash payment.");
      return;
    }

    const payload = {
      email,
      first_name,
      last_name,
      phone_number,
      address,
      transaction_id: transactionId,
      payment_method: selectedPaymentMethod,
      items: productCart.map((item) => ({
        product: item.id, // Product ID
        quantity: item.quantity, // Quantity of the product
      })),
    };

    // Log the inputs
    // console.log("Email:", email);
    // console.log("First Name:", first_name);
    // console.log("Last Name:", last_name);
    // console.log("Mobile Number:", number);
    // console.log("Address:", address);
    // console.log("Selected Payment Method:", selectedPaymentMethod);
    // console.log("TransactionId:", transactionId);
    // console.log("Total Price:", total);
    // console.log("Cart:", productCart);
    console.log(payload);

    try {
      const response = await fetch("http://127.0.0.1:8000/order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        localStorage.removeItem("cart")
        const data = await response.json();
        toast('Order placed successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
        console.log("Order response:", data);
      } else {
        const errorData = await response.json();
        console.error("Error placing order:", errorData);
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong. Please try again.");
    }

    // You can now proceed with form submission
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <form onSubmit={handlePlaceOrder}>
        <div
          className="flex"
          style={{ margin: "0px 200px", marginTop: "40px" }}
        >
          <div style={{ width: "60%", marginRight: "50px" }}>
            <div className="bg-base-200 p-5 rounded-xl">
              <h2 className="text-xl">Shipping Address</h2>
              <div className="divider"></div>

              <div className="my-3">
                <p className="mb-2">Email Address</p>
                <Input type="email" name="email" id="" label="Email Address" />
              </div>
              <div className="flex my-3">
                <div className="mr-5">
                  <p className="mb-2">First Name</p>
                  <Input
                    style={{ width: "300px" }}
                    type="text"
                    name="first_name"
                    id=""
                    label="First Name"
                  />
                </div>
                <div>
                  <p className="mb-2">Last Name</p>
                  <Input
                    style={{ width: "300px" }}
                    type="text"
                    name="last_name"
                    id=""
                    label="Last Name"
                  />
                </div>
              </div>
              <div className="my-3">
                <p className="mb-2">Mobile Number</p>
                <Input
                  type="number"
                  name="number"
                  id=""
                  label="Mobile Number"
                />
              </div>
              <div className="my-3">
                <p className="mb-2">Street Address</p>
                <Input
                  type="text"
                  name="address"
                  id=""
                  label="Street Address"
                />
              </div>
            </div>
            <div className="bg-base-200 p-5 mt-5 rounded-xl">
              <h2 className="text-xl">Payment Method</h2>
              <div className="divider"></div>
              <div className="my-3">
                <div className="flex items-center">
                  <img
                    style={{
                      width: "25px",
                      height: "30px",
                      marginLeft: "10px",
                      marginRight: "16px",
                    }}
                    src="https://i.ibb.co.com/5vff7rY/download-1-removebg-preview.png"
                    alt=""
                  />
                  <Radio
                    name="payment-type"
                    value="cash-on-delivery"
                    label="Cash on delivery"
                    checked={paymentMethod === "cash-on-delivery"}
                    onChange={handlePaymentChange}
                  />
                </div>
                <div className="flex items-center">
                  <img
                    style={{ width: "50px" }}
                    src="https://i.ibb.co.com/9rCw6Lc/images-removebg-preview.png"
                    alt=""
                  />
                  <Radio
                    name="payment-type"
                    value="bkash"
                    label="Bkash (Send money to 01730787437)"
                    checked={paymentMethod === "bkash"}
                    onChange={handlePaymentChange}
                  />
                </div>
                {/* Conditionally render the Transaction ID input based on payment method */}
                {paymentMethod === "bkash" && (
                  <div>
                    <Input
                      type="text"
                      name="transactionId"
                      id="transactionId"
                      label="Transaction ID"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div style={{ width: "40%" }} className="bg-base-200 p-5 rounded-xl">
            <h2 className="text-xl">Order Review</h2>
            <div className="divider"></div>
            <div>
              {/* Loop through cart items */}
              {cart.map((item, index) => (
                <div key={index}>
                  <div className="flex">
                    <div style={{ width: "15%" }} className="mr-3">
                      <img
                        style={{ width: "50px", borderRadius: "5px" }}
                        src={item.image}
                        alt={item.name}
                      />
                    </div>
                    <div
                      className="flex justify-between"
                      style={{ width: "80%" }}
                    >
                      <div>
                        <p>{item.name.slice(0, 30)}....</p>
                        <small>Quantity: {item.quantity}</small>
                      </div>
                      <p className="ml-auto">
                        Tk {item.price * item.quantity}.00
                      </p>
                    </div>
                  </div>
                  <div className="divider"></div>
                </div>
              ))}
              <div>
                <div className="flex justify-between my-2">
                  <p>SUBTOTAL</p>
                  <p>Tk {subtotal}.00</p>
                </div>
                <div className="flex justify-between my-2">
                  <p>DELIVERY CHARGE</p>
                  <p>Tk {deliveryCharge}.00</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between my-2 font-bold">
                  <p>TOTAL</p>
                  <p>Tk {total}.00</p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  value="PLACE ORDER"
                  className="place-order"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
