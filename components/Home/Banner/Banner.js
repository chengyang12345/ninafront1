import Link from "next/link";
import styles from "./Banner.module.scss";
import { Carousel, Row, Col } from 'antd';
export default function Banner(props) {


  return (
    
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={24} md={18}>
          <div className={styles.banner}>
            <Carousel autoplay>
              {props.data.map((item, index) => (
                <Link key={item.id} href={`/detail/${item.productId}`}>
                  <a>
                    <div
                      className={styles["banner-img"]}
                      style={{ backgroundImage: `url(${item.url})` }}>
                    </div>
                  </a>
                </Link>
              ))}
            </Carousel>
          </div>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
   
  );
}
