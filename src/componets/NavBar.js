import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'

function NavBar() {
    return (
      <header>
          <AppBar color="primary">
              <Tabs>
                <Tab label="Home"/>
                <Tab label="GALLERY"/>
                <Tab label="ABOUT US"/>
              </Tabs>
          </AppBar>
      </header>
    );
  }
  
  export default NavBar;