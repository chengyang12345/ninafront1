import Link from "next/link";
import { Row, Col, Carousel } from 'antd';

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
        <div className="listb">
            <Row>
                <Col xs={1} md={3}></Col>
                <Col xs={22} md={12}>
                    <Carousel {...settings}>
                        {props.data &&
                            props.data.map((item) => {
                                return (
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

                                );
                            })}
                    </Carousel>
                </Col>
                <Col xs={24} md={6}>
                    <div className="colloction">
                        <h1>COLOACTION</h1>
                        <h2>
                            <Link href={'/'}>
                                <a>VIEW MORE</a>
                            </Link>
                        </h2>
                    </div>
                </Col>

                <Col xs={1} md={3}></Col>
            </Row>
        </div>
    );
}
