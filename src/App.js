import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import NewsPage from "./components/NewsPage";
import ScrollTop from "./components/ScrollTop";
const App = () => {
  const apikey = process.env.REACT_APP_KEY;
  return (
    <>
      <Header />
      <ScrollTop>
      <Routes>
        <Route path="/" element={<Home apiKey={apikey}/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route
          exact
          path="/business"
          element={<NewsPage apiKey={apikey} category={"business"} />}
        />
        <Route
          exact
          path="/entertainment"
          element={<NewsPage apiKey={apikey} category={"entertainment"} />}
        />
        <Route
          exact
          path="/general"
          element={<NewsPage apiKey={apikey} category={"general"} />}
        />
        <Route
          exact
          path="/sports"
          element={<NewsPage apiKey={apikey} category={"sports"} />}
        />
        <Route
          exact
          path="/scicene"
          element={<NewsPage apiKey={apikey} category={"science"} />}
        />
        <Route
          exact
          path="/health"
          element={<NewsPage apiKey={apikey} category={"business"} />}
        />
        <Route
          exact
          path="/technology"
          element={<NewsPage apiKey={apikey} category={"technology"} />}
        />
      </Routes>
      </ScrollTop>
      <Footer />
    </>
  );
};

export default App;
