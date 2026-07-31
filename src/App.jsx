import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import OurBlog from "./components/main/OurBlogPosts/OurBlog";
import AppAllProduct from "./components/main/AllProduct/AppAllProd";
import Advertsing from "./components/main/Advertsing/Advertsing";

import BlogSite from "./components/main/OurBlogPosts/BlogSites/BlogSite1";
import BlogSite2 from "./components/main/OurBlogPosts/BlogSites/BlogSite2";
import BlogSite3 from "./components/main/OurBlogPosts/BlogSites/BlogSite3";
import BlogSite4 from "./components/main/OurBlogPosts/BlogSites/BlogSite4";
import { useState } from "react";

function App() {
  const [inptHead, setInptHead] = useState("");

  return (
    <>
      <Header inptHead={inptHead} setInptHead={setInptHead} />
      <Routes>
        <Route
          path="/"
          element={<Main setInptHead={setInptHead} inptHead={inptHead} />}
        />
        <Route
          path="/AppAllProduct"
          element={
            <AppAllProduct inptHead={inptHead} />
          }
        />
        <Route path="/ourblog" element={<OurBlog />} />
        <Route path="/Advertsing" element={<Advertsing />} />

        <Route path="/BlogSite" element={<BlogSite />} />
        <Route path="/BlogSite2" element={<BlogSite2 />} />
        <Route path="/BlogSite3" element={<BlogSite3 />} />
        <Route path="/BlogSite4" element={<BlogSite4 />} />
      </Routes>
      {/* <Main /> */}

      <Footer />
    </>
  );
}

export default App;
