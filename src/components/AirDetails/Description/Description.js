import React from "react";

import classes from "./Description.module.css";

const description = (props) => {
  var description = props.description;

  return (
    <div className={classes.DescriptionWrapper}>
      {props.description == "default" ? "" : props.description}
    </div>
  );
};

export default description;
