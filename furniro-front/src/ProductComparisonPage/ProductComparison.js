import React from 'react';
import TopBanner from '../TopBottomBannerPages/TopBanner';
import BottomBanner from '../TopBottomBannerPages/BottomBanner';

function ProductComparison() {
  return (
    <div id="ProComContainer">
        <TopBanner />
        <section id="Contact" className="setWidth"></section>
        <BottomBanner />
    </div>
  )
}

export default ProductComparison;