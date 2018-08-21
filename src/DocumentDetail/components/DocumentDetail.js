import * as React from "react";
import { connect } from "react-redux";

import {
  Grid,
  Tabs,
  Tab
} from "patternfly-react";

import "./DocumentDetail.css";


class DocumentDetail extends React.Component {

  render() {
    return (
      <Grid fluid className="DocumentDetail container-fluid container-pf-nav-pf-vertical">
        <Grid.Row>
          <Grid.Col xs={12}>
            <div className="page-header">
              <h1>Document {this.props.match.params.documentId}</h1>
            </div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col xs={12}>
            <Tabs defaultActiveKey={1} animation={false} id="document-info-tabs">
              <Tab eventKey={1} title="Tab 1">
                <h1>Tab 1</h1>
              </Tab>
              <Tab eventKey={2} title="Tab 2">
                <h1>Tab 2</h1>
              </Tab>
              <Tab eventKey={3} title="Tab 3">
                <h1>Tab 3</h1>
              </Tab>
            </Tabs>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.documentsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: (queryParams) => {
    },
    fetchResults: (queryParams) => {

    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DocumentDetail);
