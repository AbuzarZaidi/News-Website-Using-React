 import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from "./components/Home";
import About from "./components/About";
 import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NewsPage from './components/NewsPage'
function App() {
  return (
    <>
    <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="news" element={<NewsPage />} />
      </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
