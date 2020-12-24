import {Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./Home"
import Test from "./Test";
import "./App.css"

function CompSwitch(){
return(
    <div className="test">
        <Router>
          <Route path="/" component={Home}/>
          <Route path="/gallery" />
          <Route path="/about" />
          <Route path="/test" component={Test} />

        </Router>
    </div>
);

}

export default CompSwitch;