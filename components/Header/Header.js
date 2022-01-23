import Link from "next/link";
import HeaderCenter from "./HeaerCenter";
import { useState } from "react";
import { Dropdown, Row, Col, Layout, Menu } from "antd";
import { DownOutlined, UserOutlined, HeartFilled } from "@ant-design/icons";
import styles from "./Header.module.scss";
export default function Nav() {
  const { Header, Content } = Layout;
  const [showLogin, setShowLogin] = useState(false);
  const [showSkin, setShowSkin] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/account/register">Register</Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/account/login">login</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Header>
          <Row>
            <Col xs={0} md={3}></Col>
            <Col xs={24} md={18}>
            <div className={styles.header}>
              <Dropdown overlay={menu}>
                <div
                  className={styles["header-top-nav"]}
                  onClick={(e) => e.preventDefault()}
                >
                  <UserOutlined />
                  <span className="pl5">My Account</span> <DownOutlined />
                </div>
              </Dropdown>
              <div className={styles["header-top-wish"]}>
                <HeartFilled /> 
                <span className="pl5">Wish List(0)</span>
              </div>
            </div>
            </Col>
            <Col xs={0} md={3}></Col>
          </Row>
      </Header>
    
    </>
  );
}
