import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import OurBlog from "./components/main/OurBlogPosts/OurBlog";
import AppAllProduct from "./components/main/AllProduct/AppAllProd";
import Advertsing from "./components/main/Advertsing/Advertsing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AppAllProduct" element={<AppAllProduct />} />
        <Route path="/ourblog" element={<OurBlog />} />
        <Route path="/Advertsing" element={<Advertsing />} />
      </Routes>
      {/* <Main /> */}

      <Footer />
    </>
  );
}

export default App;
