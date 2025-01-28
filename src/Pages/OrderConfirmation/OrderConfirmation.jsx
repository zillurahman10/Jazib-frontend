const OrderConfirmation = () => {
  let order_id;
    
  return (
    <>
      <div className="flex justify-center">
        <img
          style={{ width: "200px" }}
          src="https://i.ibb.co.com/0ZG7Zb4/vector-green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration-488400-3.png"
          alt=""
        />
      </div>
      <h1 className="text-2xl text-center text-green-500 font-bold">
        Order placed successfully
      </h1>
      <p className="text-center text-xl">
        Your order has been successfully placed. Your order ID is <b>123456</b>.
        <br />
        You will receive a confirmation email once your order has been reviewed and approved by our team.
      </p>
      <p className="text-center">Stay tuned!</p>
    </>
  );
};

export default OrderConfirmation;
