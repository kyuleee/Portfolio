import './mycomponent.css';
import React, { useEffect } from 'react';
import gsap from 'gsap';

const MyComponent = () => {
  useEffect(() => {
    const animationOptions = {
    };

    const introAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: animationOptions.ease,
          duration: 1,
        },
      });

      tl.to('.landing .title', {
        duration: 1,
        y: 0,
        autoAlpha: 1,
      })
        .to('.landing .bg-l, .landing .bg-r', {
          scaleX: 1,
        })
        .to('.landing .bg-l, .landing .bg-r', {
          scaleY: 0,
          transformOrigin: 'top center',
        })
        .to(
          '.landing .title',
          {
            duration: 1,
            y: -60,
            autoAlpha: 0,
          },
          '-=0.6'
        )
        .to('.landing', {
          y: '-150%',
        }, '-=0.5');

      return tl;
    };

    introAnimation();
  }, []); 

  return (
    <section className="landing">
        <h2 className="title hidden" >WELCOME TO MY PORTFOLIO</h2>
        <div className="bg bg-l"></div>
        <div className="bg bg-r"></div>
    </section>
  );
};

export default MyComponent;