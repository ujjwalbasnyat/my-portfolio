import './App.css';
import Navbar from './components/navbar';
import {Route, Routes} from 'react-router-dom';
import Projects from './components/projects';
import Contact from './components/contact';
import About from './components/about';
import NotFound from './components/notfound';
import Home from './components/home';




function App() {
  return (
    <div className="App">
      <Routes className="">
        <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
