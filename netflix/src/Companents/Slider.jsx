import React from 'react'
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';
import BannerItem from './BannerItem'

export default function Slider() {
    return (
     
   <div className="list">
      <LazyLoad height={200}>
        <img src="tiger.jpg" /> 
      </LazyLoad>
      <LazyLoad height={200} once >
                               
        <BannerItem />
      </LazyLoad>
      <LazyLoad height={200} offset={100}>
                            
        <BannerItem />
      </LazyLoad>
      <LazyLoad>
        <BannerItem />
      </LazyLoad>
    </div>
     
    )
}
