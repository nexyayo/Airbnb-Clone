import React from 'react'

const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <h1 className='welcome--banner'>WELCOME :)</h1>
        <img src="https://static-cse.canva.com/blob/889243/Photo-Grid-Maker_Lead2x.jpg" className='hero--photo'/>
        <div className='hero--lineup' id='hero--lineup'></div>
        <div className='hero--text'>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--paragraph'>You can buy stuff from our sellers here!
            We have the most skilled sellers, you have ever seen! Don't believe? 
            Checkout by yourself and become a Seller!</p>
        </div>
        <div className='hero--lineup' id='hero--lineup'></div>
      </section>
    </div>
  )
}

export default Hero
