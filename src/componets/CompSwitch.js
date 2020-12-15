import {Route, BrowserRouter as Router} from "react-router-dom"
import Home from "./Home"
import "./App.css"

function CompSwitch(){
return(
    <div className="test">
        <Router>
          <Route path="/" component={Home}/>
          <Route path="/gallery" />
          <Route path="/about" />
        </Router>
    </div>
);

}

export default CompSwitch;