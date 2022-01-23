import Meta from "../components/Meta";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import CateMenu from "../components/Category/Menu";
import GoodsList from "../components/Category/List";
import { request } from "../utils/request";
import { transData } from "../utils/tool";
import { Row, Col } from 'antd';
export default function Category(props) {
  return (
    <>
      <Meta>
        <title>NINAMOKA-Colletions</title>
      </Meta>
      <Header />


      <Nav navData={props.navData} pagesData={props.pagesData} />
      <div className="catgory-content">
        <Row>
          <Col xs={0} md={3}></Col>
          <Col xs={24} md={18}>
            <Row>
              <Col xs={0} md={6}>
                <CateMenu />
              </Col>
              <Col xs={24} md={18}>
                <GoodsList />
              </Col>
            </Row>
          </Col>
          <Col xs={0} md={3}></Col>
        </Row>

      </div>
      <Footer />
    </>
  );
}
export async function getServerSideProps(context) {
  console.log('params===', context)
  // const res = await axios.post(`http://localhost:3000/api/client/home`)
  const navData = await request("http://localhost:3000/api/client/nav");
  const newNavData = transData(navData.data, "id", "pid");

  return {
    props: {
      navData: newNavData,


    }
  };
}
