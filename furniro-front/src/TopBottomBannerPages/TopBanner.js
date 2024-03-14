import React from 'react';
import './TopBanner.css';

const TopBanner = () => {
  return (
    <div>
        <section id='Topbanner'>
          <div className='box-1'>
            <img src='/imgs/logo2.png' alt='logos' />
            <h3>Checkout</h3>
            <div className='box-2'>
                <h4>Home</h4>
                <span> &#62; </span>
                <h3>Checkout</h3>
            </div>
          </div>
        </section>
    </div>
  )
}

export default TopBanner;