"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import styles from '@/css/LoadingScreen.module.css';

function LoadingScreen() {
    useEffect(() => {
      const interval = setInterval(() => {
        if (typeof gsap !== 'undefined') {
          clearInterval(interval);
          const svg = document.getElementById('svg');
          const tl = gsap.timeline();
          const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
          const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';
  
          tl.to(`${styles.loaderWrapHeading} ${styles.loadText} , ${styles.loaderWrapHeading} ${styles.cont}`, {
            delay: 1.5,
            y: -100,
            opacity: 0,
          });
          tl.to(svg, {
            duration: 0.5,
            attr: { d: curve },
            ease: 'power2.easeIn',
          }).to(svg, {
            duration: 0.5,
            attr: { d: flat },
            ease: 'power2.easeOut',
          });
          tl.to(`${styles.loaderWrap}`, { y: -1500 });
          tl.to(`${styles.loaderWrap}`, { zIndex: -1, display: 'none' });
          tl.from('headerr', { y: 200 }, '-=1.5');
          tl.from(
            'headerr .container',
            { y: 40, opacity: 0, delay: 0.3 },
            '-=1.5'
          );
        }
      }, 100);
    }, []);
  
    return (
      <div className={styles.loaderWrap}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>
  
        <div className={styles.loaderWrapHeading}>
          <div className={styles.loadText} style={{ fontFamily: "Bebas Neue, sans-serif" }}>
           
            <span>C</span>
            <span>h</span>
            <span>i</span>
            <span>v</span>
            <span>i</span>
            <span>t</span>
            <span>a</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default LoadingScreen;
