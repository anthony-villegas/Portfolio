import './App.css';
import React  from 'react';
import AnimatedShape from './components/AnimatedShape';
import Navbar from './components/Navbar';
import HomeText from './components/HomeText';
import Projects from './components/Projects'

const Stuff = () => {
  return (
    <div >
      <h1>Hi, I'm Anthony. This is my website...</h1>
    </div>
  )
}

function App() {
  return (
   
    <div>
      
      <div class="row">
        <div id="left" class="col-3">
            <AnimatedShape/>
        </div>
        <div id="right" class="col-9">
            <HomeText/>
        </div>
      </div>

      <div className="projects">

        <Projects />

      </div>       
    </div>
  );
}



export default App;
