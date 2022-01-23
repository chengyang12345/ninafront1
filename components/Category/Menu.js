import { useState } from "react";
export default function CateMenu() {
  const [colorState, setColorState] = useState(false);
  const [priceState, setPriceState] = useState(false);
  const [sizeState, setSizeState] = useState(false);
  const color = [
    {
      bg: "#FF0000",
      text: "red",
    },
    {
      bg: "#008000",
      text: "gren",
    },
    {
      bg: "#800080",
      text: "purple",
    },

    {
      bg: "#ffc0cb",
      text: "pink",
    },
    {
      bg: "#808080",
      text: "gray",
    },
    {
      bg: "#000000",
      text: "black",
    },
  ];
  const sizeArr = ["S", "M", "L", "XL", "XXl", "XXXL"];
  const handleToggle = () => {
    const state = !colorState;
    setColorState(state);
  };
  const handleToggle2 = () => {
    const state = !priceState;
    setPriceState(state);
  };
  const handleToggle3 = () => {
    const state = !sizeState;
    setSizeState(state);
  };
  return (
    <div id="column-left" className="column-left">
      <div className="Categories left-sidebar-widget">
        <div className="columnblock-title">
          Season
          </div>
        <div className="category_block">
          <ul className="box-category treeview">
            <li>
              <a href="#" className="activSub">
                Spring & Summer
              </a>
            </li>
            <li>
              <a href="#" className="activSub">
                Autumn & Winter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="filter left-sidebar-widget">
        <div className="columnblock-title">
          Categories
        </div>
        <div className="category_block">
          <ul className="box-category treeview">
            <li>
              <a href="#" className="activSub">
                Shop All Styles
              </a>
            </li>
            <li>
              <a href="#" className="activSub">
                Jeans
              </a>
            </li>
            <li>
              <a href="#">Dresses</a>
            </li>
            <li>
              <a href="#">Jumpsuits & Rompers</a>
            </li>
            <li>
              <a href="#">T-Shirts</a>
            </li>
            <li>
              <a href="#">Shirts & Tops</a>
            </li>
            <li>
              <a href="#">Hoodies</a>
            </li>
            <li>
              <a href="#">Sweatshirts & Sweatpants</a>
            </li>
            <li>
              <a href="#">Sweaters</a>
            </li>
            <li>
              <a href="#">Pants</a>
            </li>
            <li>
              <a href="#">Joggers</a>
            </li>
            <li>
              <a href="#">Shorts</a>
            </li>
            <li>
              <a href="#">Skirts</a>
            </li>
            <li>
              <a href="#">Shoes & Accessories</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="filter left-sidebar-widget">
        <div className="columnblock-title">Filters</div>
        <div className="category_block">
          <ul className="box-category">
            <li onClick={handleToggle}>
              <a href="#">Color</a>
              <i className="fa fa-plus"></i>
              <ul
                className="box-category-color"
                style={{ display: colorState ? "flex" : "none" }}
              >
                {color.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="box-category-child"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span
                        className="item-color"
                        style={{ background: item.bg }}
                      ></span>
                      <p className="text">{item.text}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li onClick={handleToggle2}>
              <a href="#">Price</a>
              <i className="fa fa-plus"></i>
              <ul
                className="box-category-color"
                style={{ display: priceState ? "flex" : "none" }}
              >
                <li
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: "40%" }}
                >
                  <input className="form-control" />
                </li>
                <li
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: "20%", textAlign: "center" }}
                >
                  to
                </li>
                <li
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: "40%" }}
                >
                  <input className="form-control" />
                </li>
              </ul>
            </li>
            <li onClick={handleToggle3}>
              <a href="#">Size</a>
              <i className="fa fa-plus"></i>
              <ul
                className="box-category-color"
                style={{ display: sizeState ? "flex" : "none" }}
              >
                {sizeArr.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="box-category-child"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  );
}
