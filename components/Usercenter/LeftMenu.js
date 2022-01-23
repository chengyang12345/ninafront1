
export default function LeftMenu(){
    return(
        <div className="col-sm-3 hidden-xs column-left" id="column-left">
        <div className="Categories left-sidebar-widget">
          <div className="columnblock-title">Account</div>
          <div className="category_block">
            <ul className="box-category">
              <li><a href="#">Forgotten Password</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Wish List</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
}