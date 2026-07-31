import LetsMake from "./LetsMake1/LetsMake";
import AllProduct from "./AllProduct/AppAllProd";
import Advertsing from "./Advertsing/Advertsing";
import OurBlog from "./OurBlogPosts/OurBlog";

const Main = ({ inptHead }) => {
  return (
    <section>
      <LetsMake />
      <AllProduct inptHead={inptHead} />
      <Advertsing />
      <OurBlog />
    </section>
  );
};

export default Main;
