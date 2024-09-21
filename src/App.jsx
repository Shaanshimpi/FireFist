import React, { useEffect, useState } from 'react';

import './App.css'
import Header from './components/home/Header'
import Quote from './components/home/Quote'
import Why from './components/home/Why'
import WhyMob from './components/home/WhyMob'
import Loading from './components/home/Loading';
import BgWidening from './components/home/BgWidening';
import Motion from './components/home/motion';

function App() {
const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[])
  return (
    <>
      {
        loading
        ?<Loading/>
        :<>
          <Header />
          <Quote />
          <Why />
          <WhyMob/>
          <Motion />
          {/* <BgWidening /> */}
          <div style={{height:`100vh`}}></div>
        </>
      }
    </>
  )
}

export default App
