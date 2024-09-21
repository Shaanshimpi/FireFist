import React, { useEffect } from 'react'
import './Motion.css'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Motion() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const tl = gsap.timeline();

        // div moving down
        tl.to(`.plus-div`,{
            y: `90vh`,
            ease: "ease",
            duration:2,
            scrollTrigger: {
                start: "68% 50%",
                end: "70% 50%",
                toggleActions: "play none none reverse",
                markers: false,
                // pin:true,
                scrub: 3
            }
        })

        // plus scale down
        tl.to(`.plus-dim`,{
            scale: 0,
            rotate:`45deg`,
            ease: "ease",
            duration:1,
            scrollTrigger: {
                // trigger: ".motion-text-bottom",
                start: "68% 60%",
                end: "66% 50%",
                toggleActions: "play none none reverse",
                markers: false,
                // pin:true,
                // scrub: 3
            }
        })
        // missile scale rotate
        tl.to(`.missile`,{
            scale:1.5,
            rotate:`180deg`,
            duration: 1,
            ease: "ease",
            scrollTrigger: {
                start: "68% 60%",
                end: "69% 50%",
                toggleActions: "play none none reverse",
                markers: false,
                // pin:true,
                scrub: 1
            }
        })
        // explosion
        tl.to(`.explosion`,{
            scale:45,
            opacity:1,
            duration: 1,
            ease: "ease",
            stagger:0.1,
            scrollTrigger: {
                start: "75% 50%",
                end: "77% 50%",
                toggleActions: "play none none reverse",
                markers: false,
                // pin:true,
                scrub: 1
            }
        })

    },[])

  return (
    <div className='motion'>
        <div className="motion-text-div">
            <div className="motion-text-top">
                <h2>MOTION</h2>
            </div>
            <div className="motion-text-bottom">
                <div className="plus-div">
                    <div className="plus-vert plus-dim">
                    </div>
                    <div className="plus-hori plus-dim">
                    </div>
                    <img className="missile" src="./images/missile.svg" alt="" />
                    <div className="explosion">
                    </div>
                </div>
                <h2>STILLS</h2>
            </div>
        </div>
    </div>
  )
}

export default Motion