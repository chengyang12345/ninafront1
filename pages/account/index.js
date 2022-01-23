import Meta from "../../components/Meta";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import LeftMenu from "../../components/Usercenter/LeftMenu";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { transData } from "../../utils/tool";
import { request } from "../../utils/request";

export default function Account(props) {
    const router = useRouter()
  return (
    <>
      <Meta>
        <title>NINAMOKA-Account</title>
      </Meta>
      <Header />
      <Nav navData={props.navData}/>
      <div className="container">
        <div className="row">
            <LeftMenu/>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
export async function getStaticProps({ params }) {
  console.log('params===',params)
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
