import { useState } from 'react'


import './App.css'
import ItemCard from './Components/ItemCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemCard title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price={109.95} imageUrl="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>
    </>
  )
}

export default App
