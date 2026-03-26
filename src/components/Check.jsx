import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Engine from './Engine';
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react';



const Check = () => {
  useEffect(() => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;500;600;700&display=swap";
      document.head.appendChild(link);
      return () => document.head.removeChild(link);
    }, []);


  return (
    <section className='second-head relative' id='second'>
    <div className='absolute max-md:right-10 pt-7 max-md:top-12  right-22 top-3 w-150 h-150  max-md:w-70  max-md:h-70 title' >
      <h2 className='sans-serif text-6xl text-center max-md:text-4xl max-md:text-right'
      style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(40px, 10vw, 80px)",
            letterSpacing: "0.03em",
          }}
      >turbo charge <span className=' text-red-600'>inline-6</span> engine inside </h2>
        <Canvas camera={{ position: [0, 1, 10] }}  rotation={[0.00, -1, 0]}>
          <Engine/>
        </Canvas>
      </div>
    </section>
  )
}

export default Check