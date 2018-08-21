import * as React from "react";
import { Link } from "react-router-dom";

import {
  ListView,
  Button
} from "patternfly-react";

import "./DocumentListItem.css";


function renderAdditionalInfo(document) {
  return [];
}

function renderActions(document) {
  return (
    <div>
      <Link className="btn btn-default" to={`/documents/${document.id}`}>
        View
      </Link>
      <Button onClick={() => alert(`Delete executed on Document ${document.id}`)}>
        Delete
      </Button>
    </div>);
}


const DocumentListItem = (props) => {
  let {document} = props;
  if (!document) {
    return <div/>
  }

  return (
    <ListView.Item
      key={document.id}
      heading={<Link to={`/documents/${document.id}`}>{document.title}</Link>}
      description={document.description}
      leftContent={<ListView.Icon name="file-text"/>}
      additionalInfo={renderAdditionalInfo(document)}
      actions={renderActions(document)}
    >
      <div className="row">
        <div className="col-md-12">{document.previewText}</div>
      </div>
    </ListView.Item>
  );
};

export default DocumentListItem;
