import React, { useState, useEffect } from "react";
import "./Orders.css";
import { Order } from "../../components";
import { useStateValue } from "../../StateProvider";
import { db } from "../../firebase";
import { Navigate, useNavigate } from "react-router-dom";
const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
        });
    } else {
      setOrders([]);
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
