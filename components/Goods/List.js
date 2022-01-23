import Link from "next/link";
import {Row,Col, Button,Carousel} from 'antd';
export default function Collecion(props) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>
};
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='slide-arrow-next'
        style={{ ...style, display: "block"}}
        onClick={onClick}
      ><img src="/image/icon-left.png" className="slide-arrow-icon"/></div>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className='slide-arrow-prev'
        style={{ ...style, display: "block"}}
        onClick={onClick}
      ><img src="/image/icon-right.png" className="slide-arrow-icon"/></div>
      );
    }
  return (
    <Row>
      <Col xs={1} md={3}></Col>
      <Col xs={22} md={18}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {props.data &&
        props.data.map((item) => {
          return (
            <Col
              key={item.id}
              xs={24}
              md={6}
            >
              <div className="item">
                <div className="product-thumb">
                  <div className="image product-imageblock">
                    {" "}
                    <Link href={`/detail/${item.id}`}>
                      <a>
                        {" "}
                        <img
                          src={JSON.parse(item.productImg)[0].url}
                          alt="cloth"
                          title="cloth"
                          className="img-responsive"
                        />{" "}
                      </a>
                    </Link>
                  </div>
                  <div className="caption product-detail">
                    
                    <h3 className="product-name">
                        {item.productName}
                    </h3>
                    <p className="price product-price">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
        </Row>
        <Row>
          <div className="btn-center-wrap">
          <Button>VIEW ALL</Button>
          </div>
            
        </Row>
      </Col>
      <Col xs={1} md={3}></Col>
     
    </Row>
  );
}
