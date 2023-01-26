import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className="fixed card w-96 bg-base-100 shadow-xl rounded mx-2">
            <figure><img src={props.img} alt={props.title} /></figure>
            <div className="card-body">
            <h2 className="card-title justify-content-space-evenly">{props.title}</h2>
            <p>{props.country}</p>
            <div className="card-actions justify-end">
            <button className="button-price-nexy">{props.price}MLN$</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card
