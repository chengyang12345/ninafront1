import Link from "next/link";
import styles from "./Nav.module.scss";
import { Input, Row, Col } from "antd";
const { Search } = Input;
export default function Nav(props) {
  return (
    <nav id="menu" className="navbar navbar-inverses">
    <Row>
      <Col xs={1} md={3}></Col>
      <Col xs={22} md={18}>
        
          <div className="nav-inner">
            <div className="navbar-header">
              
            </div>
            <Link href="/">
              <a className={styles.logo}>
                <img
                  src="/image/logo.png"
                  title="ninamoka logo"
                  alt="ninamoka logo"
                  className={styles['img-logo']}
                />
              </a>
            </Link>
            <div className="navbar-collapse">
              <ul className="main-navigation">
                { props.navData.map((item, index) => {
                  return (
                    <li className="level-top" key={index}>
                      <Link>
                      <a className="active parent">{item.cateEnName}</a>
                      </Link>
                      {item.children && (
                        <ul>
                          {item.children.map((items, i) => {
                            return (
                              <li key={i}>
                                <Link href="/category">
                                  <a>{items.cateEnName}</a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={styles.search}>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
              />
            </div>
          </div>
      </Col>
      <Col xs={1} md={3}></Col>
    </Row>
    </nav>
  );
}
