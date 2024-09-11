import { useState, useEffect } from 'react';
import React from 'react';
import './Header.css';

function Header() {
  const [flick, setFlick] = useState([
    `It's not about how good are, It's about how much better you can become`,
    'So how good do you really want to be?'
  ]);
  
  return (
    <div className="header">
      <div className="header-inner">
        <div className="head-title">
          FIREFIST SOLUTIONS
        </div>
        <h2 className="subtitle">
          Only.<br/>
          From Me To You. <br />
          Always Responsive
        </h2>

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
