import { useState } from 'react'
import { useDispatch, useSelector} from "react-redux";


import './App.css'

function App() {
  const dispatch = useDispatch();
  const cash  = useSelector( state => state.cash.cash)



  const addCash = ()=>{
      dispatch({type:"ADD_CASH",  payload: 1})
  }

  const getCash =()=>{
    dispatch({type: "GET_CASH", payload: 1})
  }

  return (
    <>
    <p>{cash}</p>
    <button onClick={() =>addCash()}>Plus</button>
    <button onClick={() =>getCash()}> Minus</button>
    </>
  )
}

export default App
