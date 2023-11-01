import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import {
  addTodo,
  decrement,
  increment,
  removeCustomer,
} from "./toolkitRedux/toolkitSlice";

import fetchCustomers from "./asyncAction/customer";
// import { decrement, increment } from "./toolkitRedux/toolkitReducer";

function App() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.main.count);
  const count = useSelector((state) => state.toolkit.count);
  const customer = useSelector((state) => state.toolkit.customers);

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addTodo(customer));
  };

  const deleteCustomer = (customer) => {
    dispatch(removeCustomer(customer.id));
  };



  const addCustomers = () => {
        dispatch(fetchCustomers());
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
          onClick={() => incrementCount()}
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
          onClick={() => decrementCount()}
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
          onClick={() => addCustomers()}
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
                onClick={() => deleteCustomer(item)}
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
