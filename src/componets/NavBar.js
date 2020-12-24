import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Home from "./home/Home"
import Gallery from "./gallery/Gallery"
import Test from "./Test";
import AboutUs from "./about_us/AboutUs"
import "./App.css"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

function NavBar() {
    return (
      <header>
        <Router>
          <AppBar color="primary">
              <Tabs>
                <Link className="links" to={"/"}><Tab label="Home"/></Link>
                <Link className="links" to={"/gallery"}><Tab label="GALLERY"/></Link>
                <Link className="links" to={"/about"}><Tab label="ABOUT US"/></Link>
              </Tabs>
          </AppBar>

          <div className="test">
            <Route exact path="/" component={Home}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/about" component={AboutUs}/>
            <Route path="/test" component={Test} />
          </div>

        </Router>
      </header>
    );
  }
  
  export default NavBar;