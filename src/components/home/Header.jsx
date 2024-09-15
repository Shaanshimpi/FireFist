import { useState, useEffect } from 'react';
import React from 'react';
import './Header.css';
function Header() {
  const [flick, setFlick] = useState([
    `It's not about how good are, It's about how much better you can become`,
    'So how good do you really want to be?'
  ]);
  
  return (
    <div className="header" id="header">
      <div className="header-inner">
        <div className="header-full">

          <div className="header-sec-text">
            

            <div className="occupation head-element">
              <p className="occupation-subtitle">
                Specialized in Design & Development
              </p>
              <h3 className="occupation-title">Development Agency</h3>
            </div>
            <div className="location head-element">
              <p className="location-subtitle">
              Currently working in
              </p>
              <h3 className="location-title">Nashik</h3>
              
            </div>
          </div>
          <div className="header-mid-text">
            <div className="header-smalltext">
              <h4>
                Navigating your digital transformation through creative solutions providing a personal touch.
              </h4>
              <br />
              <br />
              <p>
                <strong>Helping with:</strong>
                <br />
                  Creative Ideas / Rebranding
                  <br />
                  Brand Marketing Designs
                  <br />
                  UI/UX Design
                  <br />
                  Web Development
              </p>
            </div>
            <h2 className="subtitle">
              Only.<br/>
              From Me To You. <br />
              Always Responsive.
            </h2>
          </div>

          <div className="head-title">
            <span className="header-fire">FIRE</span><span className="header-fist">FIST</span>
          </div>
        </div>

        {/* absolute bottom left */}

        <div className="bottom-left">
          <div className="flicker">
            <div>
                {flick.map((e, i)=>{
                    return (<div className="flick" key={i}>
                       {e}
                    </div>)
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
