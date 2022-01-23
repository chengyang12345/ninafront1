import Link from "next/link";
import { Input, Row, Col } from "antd";
import styles from "./Header.module.scss";
const { Search } = Input;
export default function HeaderCenter() {
  return (
    <Row>
      <div className="header-inner">
        <Col xs={24}>
          <div className="header-left">
            <div id="logo" className={styles.logo}>
              <Link href="/">
                <a>
                  <img
                    src="/image/logo.png"
                    title="ninamoka logo"
                    alt="ninamoka logo"
                    className="img-responsive"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="header-right">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div>
        </Col>
      </div>
    </Row>
  );
}
