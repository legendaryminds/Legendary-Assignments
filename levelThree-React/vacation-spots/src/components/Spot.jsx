import React from 'react';

export default function Spot(props) {
  let cardColor 
  if (props.timeToGo === "Spring") {
    cardColor = "mediumseagreen"
  } else if (props.timeToGo === "Winter") {
    cardColor = "lightblue"
  } else if (props.timeToGo === "Autumn") {
    cardColor = "darksalmon"
  } else if (props.timeToGo === "Summer") {
    cardColor = "indianred"
  }

  let priceAmt
  if (props.price <= 500) {
    priceAmt = "$"
  } else if (props.price <= 1000) {
    priceAmt = "$$"
  } else if (props.price > 1000) {
    priceAmt = "$$$"
  }
  
    const imagePath = (`../images/${props.coverImg}`); // Dynamically require the image path

  
  return (
    <div className="spots" style={{ backgroundColor: cardColor }}>
      
      <img src={imagePath} alt="coverImg" />
        <h1 className='places'>Place: <span className="value place">{props.place}</span></h1>
      <h2 className="prices">Price:{priceAmt && <div className="price-amt">{priceAmt}</div>} <span className="value price">${props.price}</span></h2>
      
        <h3 className="seasons">Time to go: <span className="value timeToGo">{props.timeToGo}</span></h3>
    </div>
  )
}