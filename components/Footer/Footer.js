import Subscribe from "../Subscribe/Subscribe";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="cms_searvice">
        <Subscribe />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 footer-block">
            <h5 className="footer-title">INFORMATION</h5>
            <ul className="list-unstyled ul-wrapper">
              <li>
                <Link href="/contact/">
                  <a>CONTACT</a>
                </Link>
              </li>
              <li>
                <a href="#">PRIVACY & TERMS</a>
              </li>
              <li>
                <a href="#">SHIPPING & HANDLING</a>
              </li>
              <li>
                <a href="#">RETURNS & EXCHANGES</a>
              </li>
              <li>
                <a href="#">SIZE CHART</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 footer-block">
            <h5 className="footer-title">MY ACCOUNT</h5>
            <ul className="list-unstyled ul-wrapper">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Wish List</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Gift Certificates</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 footer-block">
            <h5 className="footer-title">Fast Link</h5>
            <ul className="list-unstyled ul-wrapper">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Ornament</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 footer-block">
            <div className="content_footercms_right">
              <div className="footer-contact">
                <h5 className="contact-title footer-title">Contact Us</h5>
                <ul className="ul-wrapper">
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span className="location2">
                      Offices Addresss:
                      <br />
                      5445 Oceanus Drive Suite #A10
                      <br />
                      Huntington Beach, CA 9264
                      <br />
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span className="mail2">
                      <a href="#">sale@nimamoka.com</a>
                      <br />
                      <a href="#">sale@nimamoka.com</a>
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-mobile"></i>
                    <span className="phone2">
                      1-888-611-7627
                      <br />
                      1-888-611-7627
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div id="bottom-footer">
            <div className="copyright">
              Copyright &copy; 2021.NINAMOKA All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
