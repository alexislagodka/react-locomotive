import React, { useRef } from 'react'
import Site from './Site'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

function App() {

 const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
    options={
      { 
        smooth: true,
        smartphone: {
          breakpoint: 0,
          smooth: true
        },
        tablet: {
          breakpoint: 0,
          smooth: true
        }
      }
    }
    // watch={[route]}
    containerRef={containerRef}
  >
    <div className='App'>
      <Site />
    </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
