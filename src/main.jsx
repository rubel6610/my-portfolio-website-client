import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './RootLayout/Root'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Lenis from 'lenis'

const MainApp = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    // Custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    // Cursor styles
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-cursor {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #3b82f6;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
        transition: width 0.3s, height 0.3s, background 0.3s;
      }
      .custom-cursor.hover {
        width: 40px;
        height: 40px;
        background: #60a5fa;
      }
      .custom-cursor.dragging {
        width: 30px;
        height: 30px;
        background: #93c5fd;
      }
    `;
    document.head.appendChild(style);

    // Mouse move event
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let speed = 0.1;

    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;
      cursor.style.left = cursorX + 'px';
      cursor.style.top = cursorY + 'px';
      requestAnimationFrame(updateCursor);
    };

    updateCursor();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnterInteractive = (e) => {
      cursor.classList.add('hover');
    };

    const handleMouseLeaveInteractive = (e) => {
      cursor.classList.remove('hover');
    };

    const handleMouseDown = (e) => {
      cursor.classList.add('dragging');
    };

    const handleMouseUp = (e) => {
      cursor.classList.remove('dragging');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup function
    return () => {
      lenis.destroy()
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    }
  }, []);

  return (
    <div className='libertinus'>
      <RouterProvider router={router}>
        <Root/>
      </RouterProvider>
    </div>
  );
};

createRoot(document.getElementById('root')).render(<MainApp />)