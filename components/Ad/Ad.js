import styles from './Ad.module.scss'
import Link from 'next/link';
import {  Row, Col } from 'antd';

export default function Banner() {


    const data = [
    { url: "/image/banners/ad1.jpg",title:'Train more. Save more.',subTitle:'That post-practice bliss feeling you’ll want to wear all day.' }, 
    { url: "/image/banners/ad2.jpg",title:'It’s go time.',subTitle:'Fabrics and fits for every workout. Available in sizes 0-20.' }];
    return (
        <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={24} md={18}>
                <div className={styles.banner}>
                    {
                        data.map(item => (
                            <div key={item.url} className={styles.item}>
                                <div className={styles['banner-img']} style={{ backgroundImage: `url(${item.url})` }} >
                                    <div className={styles.mask}>
                                        <h1 className={styles.title}>{item.title}</h1>
                                        <h2 className={styles.intro}>{item.subTitle}</h2>
                                        <div className={styles.link}>
                                            <Link href="/">
                                                <a>DISCOVER MORE</a>
                                            </Link>
                                            <Link href="/">
                                                <a>SHOP NOW</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))
                    }

                </div>
            </Col>
            <Col xs={0} md={3}></Col>
        </Row>
    );
}
