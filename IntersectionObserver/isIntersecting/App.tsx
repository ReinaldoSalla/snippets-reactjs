import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const useIntersectionObserver = (domNode) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const observerRef: any = useRef(null);
  
  useEffect(() => {
    // IntersectionObserver is created lazily once
    // https://reactjs.org/docs/hooks-faq.html
    const getObserver = () => {
      if (observerRef.current === null) {
        observerRef.current = new IntersectionObserver(([entry]) => {
          console.log(entry);
          setIntersecting(entry.isIntersecting);
        }, { root: null, rootMargin: '0px', threshold: 0 });
        return observerRef.current;
      }
    }

    const observer = getObserver();
    const localDomNode = domNode.current;
    observer.observe(localDomNode);
    return () => observer.unobserve(localDomNode);
  }, [domNode]);

  return isIntersecting;
}

const Content = () => {
  const domNode: any = useRef();
  const isIntersecting = useIntersectionObserver(domNode);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='content_wrapper'>
      <div style={{ position: 'fixed', top: '0px', left: '0px' }}>
        <h1>{isIntersecting ? 'yes' : 'not'}</h1>
      </div>
      <div style={{ height: '500px', width: '500px', marginTop: '800px', border: '1px solid black' }} ref={domNode}>
        box
      </div>
      <h1>React - Rendering</h1>
      <div className='content_container'>
        <div>
          <h2>1. Intro</h2>
          <p className='content_text'>
            The idea of this guide is to explore JSX, styling and state management in React, by creating a resposive and interactive webpage. We'll use create-react-app to setup the project.
          </p>
          <h2>2. Setup</h2>
          <p className='content_text'>
            Install the latest recommended version of <a className='content_link' href='https://nodejs.org/en/' target='_blank' rel="noopener noreferrer">Node.js </a>
          </p>
          <p className='content_text'>
            To start the project, type in your terminal
          </p>
          <div className='content_area'>
            <span className='content_command'>
              $ npx create-react-app jsexpert-rendering 
            </span>
            <span className='content_command'>
              $ cd jsexpert-rendering
            </span>
            <span className='content_command'>
              $ npm run start
            </span>
          </div>
          <p className='content_text'>
            After {' '} npm run start is finished, React will lauch the app in <a className='content_link' href='http://localhost:3000' target='_blank' rel="noopener noreferrer">localhost:3000</a>. There are some files which are unnecessary for this guide. You can leave them if you want, but if you're interested in cleaning up, you may do the following.
          </p>
          <p className='content_text'>
            Inside the src folder, delete App.test.js, index.css, logo.svg, serviceWorker.js and setupTests.js
          </p>
          <p className='content_text'>
            Write this code in index.js
          </p>
          <p className='content_text'>
            And this code in App.js
          </p>
          <p className='content_text'>
            If you find yourself deleting these files too often, you can alternatively clone this <a className='content_link' href='https://google.com' target='_blank' rel="noopener noreferrer">repository</a>. Service workers and testes are important for projects in production, but for guides like this one, they can be removed.
          </p>
        <h2>3. JSX</h2>
        <p className='content_text'>
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </p>
        <p className='content_text'>
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </p>
        <p className='content_text'>
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </p>
        <p className='content_text'>
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </p>
        <p className='content_text'>
          For each IntersectionObserverEntry in the list entries, we look to see if the entry's intersectionRatio is going up; if it is, we set the target's background-color to the string in increasingColor (remember, it's "rgba(40, 40, 190, ratio)"), replaces the word "ratio" with the entry's intersectionRatio. The result: not only does the color get changed, but the transparency of the target element changes, too; as the intersection ratio goes down, the background color's alpha value goes down with it, resulting in an element that's more transparent.
        </p>
        </div>
        <ul className='content_sidebar'>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              1. Intro
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />              
            <span className='content-sidebar-text'>
              2. Setup
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              3. JSX
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              4. Styling
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              5. useState
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              6. useReducer
            </span>
          </li>
          <li className='content-sidebar-item'>
            <div className='content-sidebar-circle' />
            <span className='content-sidebar-text'>
              7. Final Code
            </span>
          </li>
        </ul >
      </div>
    </div>
  );
};

export default Content;