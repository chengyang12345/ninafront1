import Meta from "../components/Meta";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
export default function Contact() {
  return (
    <>
      <Meta>
        <title>NINAMOKA-Contact</title>
      </Meta>
      <Header />
      <Nav />
      <div class="container">
        <div class="row">
          <div class="col-md-offset-1 col-md-10">
            <h3 class="contactus-title">
            WAYS TO CONTACT US:
            </h3>
            <p class="text-center contact-desc">
            Home / Contact Us
Contact Us
WAYS TO CONTACT US:
We'd love to hear from you with any questions or comments you may have for us. Please reach us by one of the following methods: Email, Phone or Mail. Cali and York is always here to provide the best support possible. Our customers mean everything to us.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="complaint">
              <h2 class="tf">Tel</h2>
              <div class="call-info">1-888-611-7627</div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="email">
              <h2 class="tf">Mail</h2>
              <div class="email-info">ustomerservice@caliandyork.com</div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="time">
              <h2 class="tf">Time</h2>
              <div class="time-info">Mon – Sat: 9:00 – 18:00</div>
            </div>
          </div>
        </div>
        <div class="main-form">
          <h3 class="contactus-title">Leave Message</h3>
          <div class="row">
            <form name="contactform" method="POST">
              <div class="col-sm-6">
                <input type="text" required name="name" placeholder="Name" />
              </div>
              <div class="col-sm-6 ">
                <input type="email" required name="email" placeholder="Email" />
              </div>
              <div class="col-sm-6 ">
                <input
                  type="text"
                  required
                  name="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="col-sm-6 ">
                <input
                  type="text"
                  required
                  name="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="col-xs-12 ">
                <textarea
                  required
                  name="message"
                  placeholder="Message"
                  rows="3"
                  cols="30"
                ></textarea>
              </div>
              <div class="col-xs-12  text-center">
                <div class="commun-btn">
                  <button type="submit" name="submit" class="btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
