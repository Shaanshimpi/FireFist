import { useEffect } from 'react';
import gsap from 'gsap';
import  SplitText  from 'gsap-trial/SplitText';
import './Quote.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Quote() {
  
  gsap.registerPlugin(SplitText, ScrollTrigger);
  useEffect(() =>{

      let mySplitText = new SplitText('.quote-text', {type: 'chars'})
      let chars = mySplitText.chars
      gsap.from(chars, {
          opacity:0,
          stagger:0.1,
          duration: 3,
          ease: 'back.out',
          scrollTrigger: {
            trigger:`.quote`,
            scrub:2,
            start: '30% 80%',
            end: '80% 80%',
            markers: false,
          }
      })
  },[])
  return (
    <div className="quote">
      <div className="quote-text">
        When you start a new project, it's essential to choose the right road to move forward.<strong> Thankfully, We've been there before, and We know where to turn on a highway.</strong>
      </div>
      <div className="quote-sub">
        <h5>Visualize a path where your time and money are not just spent, but invested</h5>
      </div>
    </div>
  )
}

export default Quote
