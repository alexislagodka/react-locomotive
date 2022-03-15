import React, {useRef, useState} from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Site() {
    const [isVisible, setVisible] = useState(null)
    // const [isVisible, setVisible] = useState(false)

    const { scroll } = useLocomotiveScroll()

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
  <>
        <nav className='w-screen z-50 fixed top-0 flex flex-row justify-end'>
            <ul className='flex flex-row text-2xl font-bold'>
            <li><a onClick={(e) => goToTop(e, firstSectionRef)}>First</a></li>
            <li><a onClick={(e) => goTo(e, secondSectionRef)}>Second</a></li>
            <li><a onClick={(e) => goTo(e, thirdSectionRef)}>Third</a></li>
            <li><a onClick={(e) => goTo(e, fourthSectionRef)}>Fourth</a></li>
            <li><a onClick={(e) => goTo(e, fifthSectionRef)}>Fifth</a></li>
            </ul>
        </nav>
        <div data-scroll-container className='fixed w-full'>
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
  </>
  )
}
