import { useState } from 'react';
import './App.scss';
import Contact from './Components/Contact/Contact';
import Direction from './Components/Direction/Direction';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Project from './Components/Poject/Project';
import Project2 from './Components/Project2/Project2';
import Registration from './Components/Registration/Registration';
import Result from './Components/Result/Result';
import Task from './Components/Task/Task';

function App() {
  const [scrol, setScrol] = useState(false)
  const offSet = 100;
  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  const top = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  };

  // 
  document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
  });

  document.onkeydown = (e) => {
    if (e.keyCode == 123) {
      return false;
    }else if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false
    }else if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false
    }else if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false
    }else if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false
    }
  };
  // 
  // {lan === 'uz' ? "" : lan === 'ru' ? '' : lan === 'en' ? '' : " "}
  return (
    <div className="App">
      <Header />
      <Intro />
      <Project />
      <Direction />
      <Project2 />
      <Task />
      <Registration />
      <Result />
      <Contact />
      <Footer />
      <div onClick={top} className={scrol ? "scroll-up active" : "scroll-up"}>
        <svg className='scroll-up__svg' viewBox='-2 -2 52 52'>
          <path className='scroll-up__svg__path'
            d='
              M24,0
              a24,24, 0 0,1 0, 48
              a24,24, 0 0,1 0, -48
            '/>
        </svg>
      </div>
    </div>
  );
}

export default App;
