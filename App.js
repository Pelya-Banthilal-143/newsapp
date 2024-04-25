import React, { useState } from 'react';
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Nav from './Navbar.js'
import Submit from './submitted.js'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
 
// import Calucator from "./calucator.js";
// import Calculator1 from "./calculator1";
// import Banthi  from "./Axios.js";
// import Fetch from "./Fetch.js";
// import Shiva from './Axios1.js'
// import Siva from './Axios2.js'
// import Textutils from "./Textutils.js";
//  import Nav1 from './navbar1.js'
// import Menu from './Menu.js';
// import Quiz from './quiz.js';
// import Header from './Header.js'
// import News from './News.js';
// import  TopLoadingBar from 'react-top-loading-bar';

// import Weather from './weather.js';
function Error(){
  return (
    <>
    <h1>404 Page Not Found!</h1>
    </>
  )
}


function App() {
  // const[loadingProgress,setLoadingProgress] = useState(0);


  return (
    <div className="App">
    
      {/* <Weather/> */}
      
      {/* <Quiz/> */}
      {/* <Nav1/> */}
       
      {/* <Siva/> */}
      {/* <Textutils/> */}
      {/* <Shiva/> */}
      {/* <Fetch/> */}
      {/* <Calculator1/> */}
      {/* <Calucator/> */}
      {/* <Banthi/>   */}
      <Router>
        <Nav/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/submit' element={<Submit/>}/>
          <Route path='/*' element={<Error/>}/>




        </Routes>
      </Router>
      {/* <Router>
        <Menu/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </Router> */}
      {/* <Router>
        <Header/>
        <TopLoadingBar progress={loadingProgress} color="#f11946" height={3} />

        <Routes>
          <Route path='/' element={<News category="Health" setLoadingProgress={setLoadingProgress}/>}/>
          <Route path='/newscontent' element={<News category="Business" setLoadingProgress={setLoadingProgress} />}/>
          <Route path='/newscontent1' element={<News category='entertainment'setLoadingProgress={setLoadingProgress}/>}/>
          <Route path='/newscontent2' element={<News category='General'setLoadingProgress={setLoadingProgress}/>}/>
          <Route path='/newscontent3' element={<News category='Science'setLoadingProgress={setLoadingProgress}/>}/>
          <Route path='/newscontent4' element={<News category='Sports'setLoadingProgress={setLoadingProgress}/>}/>

        </Routes>
      </Router> */}
      
      
    </div>
  );
}

export default App;
