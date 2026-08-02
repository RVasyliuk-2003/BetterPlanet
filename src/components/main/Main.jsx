import LetsMake from "./LetsMake1/LetsMake";
import AllProduct from "./AllProduct/AppAllProd";
import Advertsing from "./Advertsing/Advertsing";
import OurBlog from "./OurBlogPosts/OurBlog";

const Main = ({ inptHead, setInptHead, basketBox, setBasketBox }) => {
  return (
    <section>
      <LetsMake />
      <AllProduct
        setInptHead={setInptHead}
        inptHead={inptHead}
        basketBox={basketBox}
        setBasketBox={setBasketBox}
      />
      <Advertsing />
      <OurBlog />
    </section>
  );
};

export default Main;
