import React from "react";
import filterRange from "../../tools/filterRange";
import PropTypes from "prop-types";

const RapidHeader = ({name, description, level}) => {

  let filteredDescription = description
    .filter((oneDescription) => filterRange(level, oneDescription.range))
    .map((oneDescription) => oneDescription.text);

  return (
    <div className="rapid-header">
      <div className="rapid-name"> {name} </div>
      <div className="rapid-desc">
        {filteredDescription}
      </div>
    </div>
  );
};

RapidHeader.propTypes = {};

export default RapidHeader;