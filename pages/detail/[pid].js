import Meta from "../../components/Meta";
import GoodsList from "../../components/Goods/List";
import GoodsHeader from "../../components/Goods/Header";
import { useState } from "react";
import { request } from "../../utils/request";
import { transData } from "../../utils/tool";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useRouter } from 'next/router';
import {Button,Tabs,Form,Rate} from 'antd';
function Detail(props) {
  const [showTab, setShowTab] = useState(true);
  const handleChagneTab = (e) => {
    if (e == 1) {
      setShowTab(true);
    } else {
      setShowTab(false);
    }
  };
  return (
    <>
      <Meta>
        <title>NINAMOKA-detail</title>
      </Meta>
      <Header />
      <Nav navData={props.navData} pagesData={props.pagesData} />
      <div className="container">
        <div className="row">
          <div className="content col-sm-12">
            <div className="row">
              {/* left start */}
              <div className="col-sm-5">
                <div className="thumbnails">
                  <div>
                    <a
                      className="thumbnail fancybox"
                      href={props.goodsData.productImg}
                      title={props.goodsData.productImg}
                    >
                      <img
                        src={props.goodsData.productImg}
                        title="Casual Shirt With Ruffle Hem"
                        alt={props.goodsData.productName}
                      />
                    </a>
                  </div>
                  <div id="product-thumbnail" className="owl-carousel"></div>
                </div>
              </div>
              {/* left end */}

              {/* right start */}
              <div className="col-sm-7 prodetail">
                <h1 className="productpage-title">
                  {props.goodsData.productName}
                </h1>
                <div className="rating">
                  <Rate value={5} disabled/>
                  <span className="riview">
                    <a href="#">1 reviews</a> / <a href="#">Write a review</a>
                  </span>
                </div>
                <ul className="list-unstyled productinfo-details-top">
                  <li>
                    <h2 className="productpage-price">${props.goodsData.productPrice}</h2>
                  </li>
                </ul>
                <hr />
                <ul className="list-unstyled product_info">
                  <li>
                    <label>Brand:</label>
                    <span>
                      <a href="#">Ninamoka</a>
                    </span>
                  </li>
                  <li>
                    <label>Product Code:</label>
                    <span>{props.goodsData.productNo}</span>
                  </li>
                  <li>
                    <label>Availability:</label>
                    <span> In Stock</span>
                  </li>
                </ul>
                <hr />
                <p className="product-desc">
                  Super fitted and super comfortable. With High Stretch.
                  <br /> Our softest, stretchiest, easiest denim. Wears like
                  leggings. Looks like tried-and-true denim.
                  <br />
                  High waisted.
                  <br />
                  Contoured waistband means no waist gap.
                  <br />
                  Light indigo wash.
                  <br />
                  Button-closure, zip-fly.
                  <br />
                  Classic five-pocket styling.
                  <br />
                  Featuring hidden holds-you-in front pockets that help give you
                  a sleek, smooth look all day long.
                  <br />
                  #660524
                </p>
                <div id="product">
                  <div className="form-group">
                    <div className="row"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* right end */}
            {/* comment */}
            {/* <div className="productinfo-tab">
              <ul className="nav nav-tabs">
                <li
                  className={`${showTab ? "active" : ""}`}
                  onClick={() => handleChagneTab(1)}
                >
                  <a data-toggle="tab">Description</a>
                </li>
                <li
                  onClick={() => handleChagneTab(2)}
                  className={`${showTab ? "" : "active"}`}
                >
                  <a data-toggle="tab">Reviews (1)</a>
                </li>
              </ul>
              <div className="tab-content">
                <div className={`tab-pane ${showTab ? "active" : ""}`}>
                  <div className="cpt_product_description ">
                    <div>
                      <p className="product-desc">
                        Super fitted and super comfortable. With High Stretch.
                        <br /> Our softest, stretchiest, easiest denim. Wears
                        like leggings. Looks like tried-and-true denim.
                        <br />
                        High waisted.
                        <br />
                        Contoured waistband means no waist gap.
                        <br />
                        Light indigo wash.
                        <br />
                        Button-closure, zip-fly.
                        <br />
                        Classic five-pocket styling.
                        <br />
                        Featuring hidden holds-you-in front pockets that help
                        give you a sleek, smooth look all day long.
                        <br />
                        #660524
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`tab-pane ${showTab ? "" : "active"}`}>
                  <form className="form-horizontal">
                    <div id="review"></div>
                    <h2>Write a review</h2>
                    <div className="form-group required">
                      <div className="col-sm-12">
                        <label className="control-label" htmlFor="input-name">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value=""
                          id="input-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group required">
                      <div className="col-sm-12">
                        <label className="control-label" htmlFor="input-review">
                          Your Review
                        </label>
                        <textarea
                          name="text"
                          rows="5"
                          id="input-review"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group required">
                      <div className="col-sm-12">
                        <div className="rating">
                          <span className="fa fa-stack">
                            <i className="fa fa-star-o fa-stack-2x"></i>
                            <i className="fa fa-star fa-stack-2x"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fa fa-star-o fa-stack-2x"></i>
                            <i className="fa fa-star fa-stack-2x"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fa fa-star-o fa-stack-2x"></i>
                            <i className="fa fa-star fa-stack-2x"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fa fa-star-o fa-stack-2x"></i>
                            <i className="fa fa-star fa-stack-2x"></i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="fa fa-star-o fa-stack-2x"></i>
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    <div className="buttons clearfix">
                      <div className="pull-right">
                        <Button type="primary">Submit</Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
            <div className="container">
              <div className="row">
                <div className="content col-sm-12">
                  <GoodsHeader title="RELATED PRODUCTS" subTitle="subtitle" />
                  <GoodsList showMore={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  );
}
export async function getServerSideProps(ctx) {
  console.log('ctx===',ctx.params)
  // Fetch data from external API
  const navData = await request("http://localhost:3000/api/client/nav");
  const newNavData = transData(navData.data, "id", "pid");
  const pagesData = await request("http://localhost:3000/api/client/articles");
  const goodsData = await request("http://localhost:3000/api/product/detail",{
      id:ctx.params.pid
  })
  // Pass data to the page via props
  console.log('goodsData',goodsData.data.property)
  console.log('goodsData',goodsData.data.album)
  return { props: {  
    navData: newNavData,
    pagesData: pagesData.data,
    goodsData:goodsData.data
  } }
}
export default Detail;
