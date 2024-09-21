import React, { useEffect } from 'react'
import './BgWidening.css'

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from 'gsap-trial/SplitText';
function BgWidening() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() =>{

        let mySplitText = new SplitText('.static-text', {type: 'words'})
        let chars = mySplitText.chars
        gsap.from(chars, {
            opacity:0,
            stagger:0.1,
            duration: 3,
            scrollTrigger: {
              trigger:`.widening h3`,
              scrub:2,
              pin:true,
              markers: false,
            }
        })
    },[])
    return   (
    <div className="bg-widening">
       <div className="static-block">
            <div className="widening">
                <h3 >
                    NEXT, <span className="static-text">
                        LET'S TAKE A LOOK AT COMPANIES FREE OF THESE CHALLANGES
                        </span>
                </h3>
            </div>
       </div>
    </div>
  )
}

export default BgWidening