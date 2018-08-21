import * as React from "react";
import { connect } from "react-redux";

import {
  Grid,
  ListView,
  Paginator
} from "patternfly-react";

import DocumentToolbar from "./DocumentToolbar"
import DocumentListItem from "./DocumentListItem"

import "./DocumentList.css";

import mockDocumentList from "../mocks/mockDocumentList";

class DocumentList extends React.Component {

  render() {
    return (
      <Grid fluid className="DocumentList container-fluid container-pf-nav-pf-vertical">
        <Grid.Row>
          <Grid.Col xs={12}>
            <div className="page-header">
              <h1>Documents</h1>
            </div>
          </Grid.Col>
        </Grid.Row>
        <DocumentToolbar/>
        <ListView>
          {mockDocumentList.map((document) => <DocumentListItem key={document.id} document={document}/>)}
        </ListView>
        <Paginator
          viewType="list"
          pagination={{
            page: 1,
            perPage: 10,
            perPageOptions: [5, 10, 20, 100]
          }}
          itemCount={10}
          onPageSet={this.selectPage}
          onPerPageSelect={this.selectPageSize}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(DocumentList);
