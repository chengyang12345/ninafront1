import Meta from "../../components/Meta";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "next/router";
import { transData } from "../../utils/tool";
import { request } from "../../utils/request";
import { Form, Input, Row, Col } from "antd";
import styles from "./register.module.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
export default function Account(props) {
  const router = useRouter();
  const [form] = Form.useForm();
  const onFinish = () => {};
  const onFinishFailed = () => {};
  return (
    <>
      <Meta>
        <title>NINAMOKA-Account</title>
      </Meta>
      <Header />
      <Nav navData={props.navData} />
      <div className="container">
        <p className={styles["r-title"]}>
          REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT{" "}
        </p>
        <p className={styles["r-title"]}>OR WITH YOUR EMAIL</p>
        <Row>
          <Col xs={24} md={8}></Col>
          <Col xs={24} md={8}>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="FIRST NAME"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "PLEASE ENTER YOUR FIRST NAME",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="LAST NAME"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "PLEASE ENTER YOUR LAST NAME",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="E-MAIL"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "INVALID E-MAIL ADDRESS",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="PASSWORD"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "PLEASE ENTER YOUR PASSWORD",
                  },
                ]}
              >
                <Input.Password
                  placeholder="input password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </Form>
          </Col>
          <Col xs={24} md={8}></Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}
export async function getStaticProps({ params }) {
  console.log("params===", params);
  // const res = await axios.post(`http://localhost:3000/api/client/home`)
  const navData = await request("http://localhost:3000/api/client/nav");
  const newNavData = transData(navData.data, "id", "pid");

  return {
    props: {
      navData: newNavData,
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1,
  };
}
