import * as React from 'react';
import { connect } from "react-redux";

import Hello from './Hello'

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Hello who={this.props.who}/>
      </div>
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
