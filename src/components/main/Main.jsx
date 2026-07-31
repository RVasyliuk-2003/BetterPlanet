import LetsMake from "./LetsMake1/LetsMake";
import AllProduct from "./AllProduct/AppAllProd";
import Advertsing from "./Advertsing/Advertsing";
import OurBlog from "./OurBlogPosts/OurBlog";

const Main = ({ inptHead, setInptHead }) => {
  return (
    <section>
      <LetsMake />
      <AllProduct setInptHead={setInptHead} inptHead={inptHead} />
      <Advertsing />
      <OurBlog />
    </section>
  );
};

export default Main;
