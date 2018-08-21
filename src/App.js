import React from "react";
import { withRouter } from "react-router-dom";
import {
  AboutModal,
  Masthead,
  MenuItem,
  VerticalNav
} from "patternfly-react";

import { Routes } from "./Routes"
import Notifications from "./Notifications/components/Notifications"

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAboutModal: false
    }
  }

  navigateTo = (subroute) => {
    this.props.history.push(subroute);
  };

  handleTitleClick = () => {
    this.props.history.push("/");
  };

  openAboutModal = () => {
    this.setState({showAboutModal: true});
  };

  closeAboutModal = () => {
    this.setState({showAboutModal: false});
  };

  render() {
    return (
      <div className="App">
        <VerticalNav>
          <VerticalNav.Masthead
            title="Patternfly React Starter"
            navToggle={false}
            onTitleClick={this.handleTitleClick}
            href="/"
          >
            <Masthead.Collapse>
              <Masthead.Dropdown
                id="app-help-dropdown"
                noCaret
                title={<span title="Help" className="pficon pficon-help" />}
              >
                <MenuItem eventKey="1">Help</MenuItem>
                <MenuItem eventKey="2" onSelect={this.openAboutModal}>About</MenuItem>
              </Masthead.Dropdown>
            </Masthead.Collapse>
          </VerticalNav.Masthead>
          <VerticalNav.Item
            title="Home"
            iconClass="fa fa-dashboard"
            onClick={() => this.navigateTo("/home")}
            className={null}
          />
          <VerticalNav.Item
            title="Documents"
            iconClass="fa fa-file-text"
            onClick={() => this.navigateTo("/documents")}
            className={null}
          />
        </VerticalNav>
        <AboutModal
          show={this.state.showAboutModal}
          onHide={this.closeAboutModal}
          productTitle="Patternfly React Starter"
        >
          <p>About the project</p>
        </AboutModal>
        <Routes/>
        <Notifications/>
      </div>
    );
  }
}

export default withRouter(App);
