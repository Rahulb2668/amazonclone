import React from "react";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, index) => (
        <div className="checkoutProduct">
          <img className="checkoutProduct__image" src={item.image} />

          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{item.title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{item.price}</strong>
            </p>
            <div className="checkoutProduct__rating">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>🌟</p>
                ))}
            </div>
          </div>
        </div>
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Order;
