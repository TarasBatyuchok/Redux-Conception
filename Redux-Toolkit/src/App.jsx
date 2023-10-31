import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { addCustomerAction, removeCustomerAction, plusCountAction,minusCountAction } from "./vanillaRedux/mainReducer";

import fetchCustomers from "./asyncAction/customer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.main.count);
  const customer = useSelector((state) => state.main.customers);



  const addCash = () => {
    dispatch(plusCountAction(1));
  };

  const getCash = () => {
    dispatch(minusCountAction(1));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <p>{count}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => addCash()}
        >
          Plus
        </button>
        <button
          style={{
            padding: "10px 20px",
            background: "#f44336",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => getCash()}
        >
          Minus
        </button>
        <button
          style={{
            padding: "10px 20px",
            background: "#008CBA",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => addCustomer(prompt())}
        >
          Add Customer
        </button>
        <button
          style={{
            padding: "10px 20px",
            background: "#008CBA",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(fetchCustomers())}
        >
          Add Many Customers
        </button>
      </div>

      {customer.length > 0 ? (
        customer.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                margin: "10px",
              }}
              key={item.id}
            >
              <div>{item.name}</div>
              <button
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onClick={() => removeCustomer(item)}
              >
                Remove
              </button>
            </div>
          );
        })
      ) : (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          No customer
        </div>
      )}
    </>
  );
}

export default App;
