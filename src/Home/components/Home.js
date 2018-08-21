import * as React from "react";
import { connect } from "react-redux";
import { Grid } from "patternfly-react";

import Hello from "./Hello"

class Home extends React.Component {
  render() {
    return (
      <Grid fluid className="Home container-fluid container-pf-nav-pf-vertical">
        <Grid.Row>
          <Grid.Col xs={12}>
            <div className="page-header">
              <h1>Home</h1>
            </div>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col xs={12}>
              <Hello who="World"/>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.homeReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
