import Link from 'next/link'
export default function CatLog(props) {
    return (
        <div className="container-fluid">
            <div className="cms_banner">
                <div className="row">
                    {
                        props.data.map((item,index)=>{
                            return (
                                <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
                                <div className="banner sub-hover">
                                    <Link href="/category">
                                    <a href="#"><img src={item.cateUrl} alt="Sub Banner1" className="img-responsive" /></a>
                                    </Link>
                                    <div className="bannertext">
                                        <h2>{item.cateEnName}</h2>
                                        <Link href="/category">
                                        <button className="btn">More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                
                   
                   
                </div>
            </div>
        </div>
    )
}