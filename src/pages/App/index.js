import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Products from '../Products';
import Services from '../Services';
import Join from '../Join';
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";


function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  // state-г өөрчлөх функц
  const toggleSideBar = () => {
    setShowSidebar(prevState => !prevState);
  };

return (
  <div>
      {/* toggleSideBar функцыг Toolbar руу дамжуулна */}
      <Toolbar toggleSideBar={toggleSideBar} />
      {/* SideBar-д showSidebar болон toggleSideBar props дамжуулна */}
      <Sidebar showSidebar={showSidebar} toggleSideBar={toggleSideBar}/>
<div>

</div>
  <main className={css.content}>
  <Router>
        <Routes>
          <Route path="/"  exact element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Join" element={<Join />} />
        </Routes>
      </Router>
  </main>
  <Footer/>

</div>

);
};

export default App;
