import React from "react";
import "./Checkout.css";
import { Subtotal, CheckoutProduct } from "../../components";
import { useStateValue } from "../../StateProvider";
const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h5 style={{ paddingLeft: "10px" }}>Hello, {user?.email}</h5>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
