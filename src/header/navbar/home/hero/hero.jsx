import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'

const slides = [
  { url: "http://www.myinceptiontech.com/img/slide/slide-1.jpg", caption : 'first'},
  { url: "http://www.myinceptiontech.com/img/slide/slide-2.jpg",caption : 'second' },
  { url: "http://www.myinceptiontech.com/img/slide/slide-3.jpg", caption : 'third' },
];

const divStyle = {
  display:'flex',
  alignItems: "center",
  justifyContent: "center",
  height: "800px",
  backgroundSize: 'cover'
}

const spanStyle = {
  fontSize: "100px",
  background: "efefef",
  color: "#000000"
}

export default function Hero() {
  return (
    <div className='slide-container'> 
        <Slide>
          {slides.map((image, index) =>(
            <div key={index}>
              <div style={{...divStyle,'backgroundImage': `url(${image.url})`}}>
                <span style={{spanStyle}}>{image.caption}</span>
              </div>
            </div>
          ))}
        </Slide>
    </div>
  )
}




// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css';

// const Example = () => {
//     const images = [
//         "http://www.myinceptiontech.com/img/slide/slide-1.jpg",
//         "http://www.myinceptiontech.com/img/slide/slide-2.jpg",
//         "http://www.myinceptiontech.com/img/slide/slide-3.jpg",
//     ];

//     return (
//         <Slide>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[0]})` }}>
//                     <span>Slide 1</span>
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[1]})` }}>
//                     <span>Slide 2</span>
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[2]})` }}>
//                     <span>Slide 3</span>
//                 </div>
//             </div>
//         </Slide>
//     );
// };

// export default Example;


