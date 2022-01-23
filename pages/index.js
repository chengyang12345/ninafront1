import Meta from "../components/Meta";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Banner from "../components/Home/Banner/Banner";
import GoodsList from "../components/Goods/List";
import GoodsListB from '../components/Goods/Listb';
import GoodsHeader from "../components/Goods/Header";
import Footer from "../components/Footer/Footer";
import { request } from "../utils/request";
import { transData } from "../utils/tool";
import AD from "../components/Ad/Ad";
export default function Home(props) {
  console.log("props-===", props);
  return (
    <div>
      <Meta>
        <title>NINAMOKA-home</title>
        <link rel="icon" href="/favicon.ico" />
      </Meta>
      <Header />
      <Nav navData={props.navData} />
      <Banner data={props.bannerData} />
      <>
        <GoodsHeader data={props.confData[0]} />
        <GoodsList data={props.confData[0].goods} />
      </>
     <AD/>
      <>
        <GoodsListB data={props.confData[1].goods} />
      </>

      <div className="container">
        <div className="row">
          <div className="content" style={{ minHeight: "inherit" }}>
            <GoodsHeader
              data={{
                title: "Our online shopes",
                hideSubtitle:true
              }}
            />
          </div>
          {props.channelData && props.channelData.map((item) => {
            return (
              <div className="col-md-3 col-xs-6" key={item.name}>
                <a href={item.url} target="_blank">
                  <img src={item.logoUrl} className="img-responsive" />
                </a>
              </div>
            );
          })}

        </div>
      </div>
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  
  // const res = await axios.post(`http://localhost:3000/api/client/home`)
  const navData = await request("http://localhost:3000/api/client/nav");
  const bannerData = await request("http://localhost:3000/api/client/banner");
  const pagesData = await request("http://localhost:3000/api/client/articles");
  const newNavData = transData(navData.data, "id", "pid");
  const confData = await request("http://localhost:3000/api/client/homeGoods");
  const channelData = await request(
    "http://localhost:3000/api/client/getchannel"
  );
  const arr = [...channelData.data]
  for (let i = 0; i < 4 - channelData.data.length; i++) {
    arr.push({
      name: 'empty' + i,
      logoUrl: '/image/brand/empty.png'
    })
  }
  console.log("navData", navData);
  return {
    props: {
      navData: newNavData,
      pagesData: pagesData.data,
      bannerData: bannerData.data,
      confData: confData.data,
      channelData: arr,
    },
    // Re-generate the post at most once per second
    // if a request comes in
  };
}
