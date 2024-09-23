import { useRef} from 'react';
import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

const Index = () => {

  const h1Ref = useRef(null); 

  useGSAP(() => {
      if (h1Ref.current) {
        // Animate the element
        gsap.from(h1Ref.current, {
          opacity:0,
          scale:0.5,
          y:100,
          duration:0.5,
          delay:0.5
        });
      }
  });

  return (
    <div>
      <h1 ref={h1Ref}>Audio Shots</h1>
    </div>
  );
};

export default Index;
