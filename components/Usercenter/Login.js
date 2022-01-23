import Link from "next/link";

export default function Login() {
  return (
    <div className="col-sm-9" id="content">
      <div className="row">
        <div className="col-sm-6">
          <h2>New Customer</h2>
          <div className="radio">
            <Link href="/account?type=register">
              <a>Register Account</a>
            </Link>
          </div>
          <div className="radio">
            <span>Socical Account Login</span>
            <div className="register-social">
              <ul>
                <li className="facebook">
                  <a>
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="linkedin">
                  <a>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="twitter">
                  <a>
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="gplus">
                  <a>
                    <i className="fa fa-google"></i>
                  </a>
                </li>
                <li className="youtube">
                  <a>
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <h2>Returning Customer</h2>
          <p>I have an account with us</p>
          <div className="form-group">
            <label className="control-label" for="input-email">
              E-Mail
            </label>
            <input
              type="text"
              name="email"
              value=""
              placeholder="E-Mail"
              id="input-email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label" for="input-password">
              Password
            </label>
            <input
              type="password"
              name="password"
              value=""
              placeholder="Password"
              id="input-password"
              className="form-control"
            />
            <a href="#" className="forgot">
              Forgotten Password
            </a>
          </div>
          <input
            type="button"
            value="Login"
            id="button-login"
            data-loading-text="Loading..."
            className="btn btn-primary"
          />
        </div>
      </div>
    </div>
  );
}
