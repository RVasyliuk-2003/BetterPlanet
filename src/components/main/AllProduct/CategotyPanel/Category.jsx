import { useState } from "react";
import "./category.css";
import AllProducts from "../AllProduct";

const CategoryPanel = ({
  product,
  clickCategory,
  setClickCategory,
  clickSize,
  setClickSize,
}) => {
  const noCategorRepeat = [...new Set(product.map((ell) => ell.category))];

  const noSizeRepeat = [...new Set(product.map((ell) => ell.size))];

  return (
    <section>
      <div className="leftPanel_Categories">
        <p>Categories</p>
        {noCategorRepeat.map((ell) => (
          <ul key={ell.id}>
            <li>
              <a
                style={{ color: clickCategory === ell? "green" : undefined }}
                onClick={() => setClickCategory(ell)}
                href="#"
              >
                {ell}
              </a>
            </li>
            <li>({ell.length})</li>
          </ul>
        ))}

        <div className="leftPanel_Size">
          <p>Size</p>
          {noSizeRepeat.map((ell) => (
            <ul key={ell.id}>
              <li>
                <a
                  style={{ color: clickSize === ell ? "green" : undefined }}
                  onClick={() => setClickSize(ell)}
                  href="#"
                >
                  {ell}
                </a>
              </li>
              <li> ({ell.length})</li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPanel;
