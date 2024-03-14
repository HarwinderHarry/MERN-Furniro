import React from 'react';
import './BottomBanner.css';

const BottomBanner = () => {
  return (
    <div id="CheckoutContainer" >
<section id='bottombanner'>
<div className='boxesSet'>
    <div className='boxset-1'>
        <div className='logImg'>
            <img src='/imgs/Vector-1.png' alt='vector-1' />
        </div>
        <div className='textDetail'>
            <h3>High Quality</h3>
            <h4>Crafted from top materials</h4>
        </div>
    </div>

    <div className='boxset-2'>
        <div className='logImg'>
            <img src='/imgs/Vector-2.png' alt='vector-2' />
        </div>
        <div className='textDetail'>
            <h3>Warranty Protection</h3>
            <h4>Over 2years</h4>
        </div>
    </div>

    <div className='boxset-3'>
        <div className='logImg'>
            <img src='/imgs/Vector-3.png' alt='vector-3' />
        </div>
        <div className='textDetail'>
            <h3>Free Shipping</h3>
            <h4>Order over $150</h4>
        </div>
    </div>

    <div className='boxset-4'>
        <div className='logImg'>
            <img src='/imgs/Vector-4.png' alt='vector-4' />
        </div>
        <div className='textDetail'>
            <h3>24 / 7 Support</h3>
            <h4>Dedicated Support</h4>
        </div>
    </div>
</div>
</section>

    </div>
  )
}

export default BottomBanner;