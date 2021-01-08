import React from 'react';
import { Slide } from 'react-slideshow-image';
import  {  Fade  }  from  'react-slideshow-image' ; 

import './App.scss';
import data from './Data.png';
import Google from './Google.svg';



const slideImages = [
  './Data.png',
  './google.svg',
  './google.png'
];

const  fadeImages  =  [ 
    './Data.png',
    './google.svg',
    './google.png'
  ] ;
/*
const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${data})`}}>
            <img src={data}/> 

              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <img src={Google} /> 
              <span>Slide 2</span>
            </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};
*/

const  Slideshow  =  ( )  =>  { 
  return  ( 
    <div  className = "slide-container" > 
      <Fade> 
        <div  className = "each-fade" > 
          <div  className = "image-container" > 
            <img  src={data}/> 
          </div> 
          < h2 > Primeiro slide </h2 > 
        </div> 
        <div  className = "each-fade" > 
          <div  className = "image-container" > 
            <img  src={ Google}/> 
          </div > 
          < h2 > Segundo slide </h2> 
        </div> 
        <div  className = "each-fade" >
          <div className = "image-container" > 
            <div img  src={Google}/> 
          </div > 
          <h2 > Terceiro slide </h2 > 
        </div > 
      </Fade> 
    </div> 
  ) 
}

export default Slideshow;