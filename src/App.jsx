import './App.css';
import Main from "./Components/Main/Main";
import About from "./Components/AboutUs/About";
import Expert from "./Components/Expert/Expert";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <>
      <Main />
      <div className='Hero'>
        <About/>
        <Expert/>
      </div>
      <Footer/> 
    </>
  )
}

export default App;
 