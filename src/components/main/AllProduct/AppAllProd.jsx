import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image7 from "./images/image7.png";
import image8 from "./images/image8.png";
import image9 from "./images/image9.png";
import image10 from "./images/image10.png";
import img013 from "./images/ss013.png";
import img014 from "./images/product-20-320x320 1.png";
import img015 from "./images/product-21-320x320 1.png";

import AllProduct from "./AllProduct";
import CategoryPanel from "./CategotyPanel/Category";

const AppAllProduct = () => {
  const product = [
    {
      id: 1,
      img: image1,
      title: "Barberton Daisy",
      price: 119,
      oldPrice: null,
      discount: null,
      category: "Terrariums",
      size: "Small",
    },
    {
      id: 2,
      img: image2,
      title: "Angel Wing Begonia",
      price: 169,
      oldPrice: null,
      discount: null,
      category: "House Plants",
      size: "Medium",
    },
    {
      id: 3,
      img: image7,
      title: "African Violet",
      price: 199,
      oldPrice: 229,
      discount: 13,
      category: "House Plants",
      size: "Large",
    },
    {
      id: 4,
      img: image8,
      title: "Beach Spider Lily",
      price: 129,
      oldPrice: null,
      discount: null,
      category: "Big Plants",
      size: "Large",
    },
    {
      id: 5,
      img: image9,
      title: "Blushing Bromeliad",
      price: 139,
      oldPrice: null,
      discount: null,
      category: "House Plants",
      size: "Medium",
    },
    {
      id: 6,
      img: image10,
      title: "Aluminum Plant",
      price: 179,
      oldPrice: null,
      discount: null,
      category: "Succulents",
      size: "Medium",
    },
    {
      id: 7,
      img: img013,
      title: "Bird's Nest Fern",
      price: 99,
      oldPrice: null,
      discount: null,
      category: "Potter Plants",
      size: "Small",
    },
    {
      id: 8,
      img: img014,
      title: "Broadleaf Lady Palm",
      price: 59,
      oldPrice: null,
      discount: null,
      category: "Terrariums",
      size: "Small",
    },
    {
      id: 9,
      img: img015,
      title: "Chinese Evergreen",
      price: 39,
      oldPrice: null,
      discount: null,
      category: "House Plants",
      size: "Small",
    },
  ];
  return (
    <>
      <AllProduct product={product} />
    </>
  );
};

export default AppAllProduct;
