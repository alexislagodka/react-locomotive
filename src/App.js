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
        mobile: {
          smooth: true
        },
        tablet: {
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
