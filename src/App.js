import React, { useRef, useEffect, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
 const [scroll, setScroll] = useState(null)
 const containerRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
  });
    setScroll(scroll)
  }, [])

  const [isVisible, setVisible] = useState(null)

  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)
  const thirdSectionRef = useRef(null)
  const fourthSectionRef = useRef(null)
  const fifthSectionRef = useRef(null)

  const goToTop = (event) => {
      event.preventDefault()
      scroll && scroll.scrollTo(0)
  }
  const goTo = (event, ref) => {
    event.preventDefault()
    scroll && scroll.scrollTo(ref.current)
  }

  scroll && scroll.on('scroll', (args) => {
      // Get all current elements : args.currentElements
      console.log(args.currentElements)
      if(typeof args.currentElements['second'] === 'object') {
          let progress = args.currentElements['second'].progress;
          if(progress > 0.3 ){
              setVisible('second')
          } else {
              setVisible(null)
          }
      }
  });
 

  return (
    <div className='App'>
      <nav className='w-screen z-50 fixed top-0 flex flex-row justify-end'>
        <ul className='flex flex-row text-2xl font-bold'>
        <li><a href='#0' onClick={(e) => goToTop(e, firstSectionRef)}>First</a></li>
        <li><a href='#0' onClick={(e) => goTo(e, secondSectionRef)}>Second</a></li>
        <li><a href='#0' onClick={(e) => goTo(e, thirdSectionRef)}>Third</a></li>
        <li><a href='#0' onClick={(e) => goTo(e, fourthSectionRef)}>Fourth</a></li>
        <li><a href='#0' onClick={(e) => goTo(e, fifthSectionRef)}>Fifth</a></li>
        </ul>
      </nav>
      <div data-scroll-container ref={containerRef}>
          <section data-scroll-section-inview ref={firstSectionRef} className='w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-500 flex justify-center items-center'>
          <h1 data-scroll data-scroll-id='first' data-scroll-direction='vertical' data-scroll-speed='20'>First</h1>
          </section>
          <section data-scroll-section-inview ref={secondSectionRef} data-scroll-call='test' className='w-full h-screen bg-gradient-to-b from-orange-500 to-pink-500 flex justify-center items-center'>
          <h1 data-scroll data-scroll-id='second' className={`fadeIn ${isVisible === 'second' ? ' is-visible' : ''}`}>Second</h1>
          </section>
          <section data-scroll-section-inview ref={thirdSectionRef} className='w-full h-screen bg-gradient-to-b from-violet-500 to-fuchsia-500 flex justify-center items-center'>
          <h1 data-scroll data-scroll-direction='horizontal' data-scroll-speed='-20' data-scroll-id='third'>Third</h1>
          </section>
          <section data-scroll-section-inview ref={fourthSectionRef} className='w-full h-screen bg-gradient-to-b from-green-500 to-emerald-500 flex justify-center items-center'>
          <h1 data-scroll data-scroll-id='fourth' data-scroll-direction='horizontal' data-scroll-speed='20'>Fourth</h1>
          </section>
          <section data-scroll-section-inview ref={fifthSectionRef} className='w-full h-screen bg-gradient-to-b from-fuchsia-500 to-red-500 flex justify-center items-center'>
          <h1 data-scroll data-scroll-id='fifth' data-scroll-direction='vertical' data-scroll-speed='20'>Fifth</h1>
          </section>
      </div>
    </div>
  );
}

export default App;
