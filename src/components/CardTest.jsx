import React from 'react'

const CardTest = (props) => {
  let badgeText
  let stateText


  if(props.card.openSpots === 0) {
    badgeText = "SOLD OUT"
  }
  else
  {
    badgeText = "AVAILABLE"
  }

  if(props.card.state === "Online") {
    stateText = "Online"
  }
  else {
    stateText = "Offline"
  }


  return (
    <div className="card">
      {
        props.card.openSpots === 0 ? <div className='card--sold-badge'>{badgeText}</div> : <div className='card--avaible-badge'>{badgeText}</div>
      }

      {
        props.card.state === "Online" ? <div className='card--online-badge'>{stateText}</div> : <div className='card--offline-badge'>{stateText}</div>
      }

      <img src={props.card.coverImg} alt={props.card.altImg} className="card--image"/>
      <div className='card--stats'>
        <img className='card--star--img' src='https://play-lh.googleusercontent.com/PuuE9Y9_YxT0FrgJ9KecTsX6WB_AzdlL2zubNBr23AzWT1cgVTH4vB7PA0O2ATC1nw' />
        <span className='gray'>{props.card.stats.rating}</span>
        <span className='gray'>({props.card.stats.reviewCount})</span>
        <span>{props.card.location}</span>
      </div>
      <div className='card--descriptions'>
        <p>{props.card.title}</p>
        <p><span className='bold'>{props.card.price}$</span> / {props.card.type}</p>
      </div>
    </div>
  )
}

export default CardTest
