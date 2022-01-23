import Link from 'next/link'
export default function Breadcrumb() {
  return (
    <div className="breadcrumb parallax-container">
      <div className="container">
        <div className="row">
          <div className="breadcrumb-list col-sm-12">

              <a href="index.html">Home</a>
           
            &gt;
           
              <a href="#">Account</a>
            
            &gt;
           
              <a href="login.html">Login</a>
           
          </div>
        </div>
      </div>
    </div>
  );
}
