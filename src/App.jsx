import "./App.css";
import { Header } from "./components";
import { Home, Checkout, Login, Payment, Orders } from "./Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  " pk_test_51L9WS5D7nNV20SsOrxwi6IvG4df3htVhl473vjqTYBvw0TFRbk13M8KzkFffI0iAWjsLFScZP6KuBti7qmzhtZDR00NLu4CW21"
);

function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  //BEM convention
  console.log(user);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
