import { useState } from 'react'
import './App.css'
import Spot from './components/Spot'  
import data from './data'
import Header from './components/Header.jsx'

export default function App() {
  const vacay = data.map(item => { 
    return (
      
      <Spot
        key={item.id}
        place={item.place}
        price={item.price}
        timeToGo={item.timeToGo}
        coverImg={item.coverImg}
      />
    )
  })
  return (
    <>
      <Header />
      <div className="spots-container">{vacay}</div>
    </>
  )
}