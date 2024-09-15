import React,{useState, useRef} from 'react'
import './WhyMob.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function WhyMob() {
    const [titles, setTitles] = useState([
        `Custom Website Design`,
        `E-commerce Solutions`,
        `Web Application Development`,
        `Mobile App Development`
    ])
    const main = useRef();
  
    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('.why-mob-section-container');
        boxes.forEach((box) => {
          gsap.to(box, {
            x: -500,
            scrollTrigger: {
              trigger: box,
              start: 'bottom center',
              end: 'top center',
              scrub: false,
              markers: true,
            },
          });
        });
      },
      { scope: main }
    );
  return (
    <div className='why-mob'  ref={main}>
        <h5 className="why-mob-title">We're here for you if need</h5>
      <div className="why-mob-section-container">
        {titles.map((e,i)=>{
            return <div className="why-mob-section" key={i} id={`why-mob-sec-`+i} >
                <div>
                <h3>{e}</h3>  

                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default WhyMob