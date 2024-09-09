import React, {useState} from 'react';
import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import Home from '../Home';
import Sidebar from "../../components/Sidebar"



function App() {

  const [showSidebar, setShowSidebar] = useState(false);

  // state-г өөрчлөх функц
  const toggleSideBar = () => {
    setShowSidebar(prevState => !prevState);
  };

return(
  <div>
      {/* toggleSideBar функцыг Toolbar руу дамжуулна */}
      <Toolbar toggleSideBar={toggleSideBar} />
      {/* SideBar-д showSidebar болон toggleSideBar props дамжуулна */}
      <Sidebar showSidebar={showSidebar} toggleSideBar={toggleSideBar}/>

  <main className={css.content}>
    <Home/>
    <div>Testing...</div>
  </main>

</div>

);
 };

export default App;
