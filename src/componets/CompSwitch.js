import {Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./home/Home"
import Gallery from "./gallery/Gallery"
import Test from "./Test";
import "./App.css"

function CompSwitch(){
return(
    <div className="test">
        <Router>

          <Route exact path="/" component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/about" />
          <Route path="/test" component={Test} />

        </Router>
    </div>
);

}

export default CompSwitch;