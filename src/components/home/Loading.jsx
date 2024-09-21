import React, {useEffect} from 'react'
import './Loading.css'
import { gsap } from 'gsap'
import  SplitText  from 'gsap-trial/SplitText';

function Loading() {
    gsap.registerPlugin(SplitText);
    useEffect(() =>{

        let mySplitText = new SplitText('.loading-firefist', {type: 'chars'})
        let chars = mySplitText.chars
        gsap.from(chars, {
            yPercent:130,
            stagger:0.1,
            duration: 2,
            ease: 'back.out',
        })
    },[])
    return (
        <>
            <div className="loading">
                <div className="loading-text">
                    <h2 className='loading-firefist'>
                        FIREFIST
                    </h2>
                </div>
            </div>
        </>
      );
}

export default Loading