import './App.css'
import React from 'react';
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Contact}  from './components/Contact.jsx';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
