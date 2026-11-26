import React, { useEffect, useState } from 'react';

import './App.css'
import Header from './components/home/Header'
import Quote from './components/home/Quote'
import Why from './components/home/Why'
import WhyMob from './components/home/WhyMob'
import Loading from './components/home/Loading';
import BgWidening from './components/home/BgWidening';
import Motion from './components/home/Motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload critical assets while loader is active
    const assetsToPreload = [
      '/images/header-logo-2.jpg',
      '/images/legendary.webp',
      '/images/bar.webp',
      '/images/genk.webp',
      '/images/phone.webp',
      '/images/missile.svg'
    ];
    assetsToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);
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
