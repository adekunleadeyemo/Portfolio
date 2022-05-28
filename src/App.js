import React, {useState} from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackTopBtn from './components/BackTopBtn';

function App() {
  // const [fot, setFot] = useState("")
  

  return (
    <div className='bg-white relative'>
     <Header/>

      {/* <Header checkClick={vap => {vap? setFot("new page"):setFot("")}} /> */}
      {/* <About/>
      <Blog /> */}
       <Hero />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <h1>{fot}</h1> */}
      <BackTopBtn />
    </div>
  );
};

export default App;
