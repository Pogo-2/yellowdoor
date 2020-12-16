import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

class Test extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <Tabs>
                            <TabList className="lead" style={{ borderBottom: "1px solid #aaaaaa" }}>
                                <Tab >Home</Tab>
                                <Tab>About</Tab>
                                <Tab>Gallery</Tab>
                            </TabList>
                            <TabPanel>
                                <p>Home Page</p>
                            </TabPanel>
                            <TabPanel>
                                <p>About Page</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Gallery</p>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}

export default Test