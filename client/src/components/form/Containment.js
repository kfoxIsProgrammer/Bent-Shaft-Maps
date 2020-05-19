import React, { Component } from "react";
import { capitalCase } from "change-case";
import Grid from "@material-ui/core/Grid";
var _ = require("lodash");

export class Containment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { arr, label, type, handleSelect, selected } = this.props;

    let list = arr.map((elem, index) => {
      let memberClassName = _.isEqual([label, selected], [type, index])
        ? "member on"
        : "member off";

      return (
        <div
          key={`list${index}`}
          className={memberClassName}
          onClick={() => handleSelect(label, index)}
        >
          {elem.name || elem.type}
        </div>
      );
    });

    list.push(
      <Grid item>
        <div className="member new" onClick={this.props.handleAddNewFeature}>
          Add New {capitalCase(label)}
        </div>
      </Grid>
    );

    return <Grid container>{list}</Grid>;
  }
}

export default Containment;
