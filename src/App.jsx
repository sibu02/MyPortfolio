import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Footer from "./components/Footer.jsx";

function App() {
  const [isBlurred,setIsBlurred] = useState(true);
  useEffect(() => {
    const timer = setTimeout(()=>{
      setIsBlurred(false);
    },1000)
    AOS.init({ duration: 1000 });
    return ()=>clearTimeout(timer); 
  }, []);
  return (
    <div className={`${isBlurred?"blur-sm opacity-80":"blur-none opacity-100"} transition-all duration-1000`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </motion.div>
      
    </div>
  );
}

export default App;
