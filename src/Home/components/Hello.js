import * as React from "react";
import { Alert } from "patternfly-react"

const Hello = (props) => {
  return (
    <Alert type={"success"}>
        <h3>Hello {props.who}</h3>
    </Alert>
  )
};


export default Hello;
