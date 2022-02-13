import React from "react";

import classes from "./AQI.module.css";

const aqi = (props) => {
  return <div className={classes.TemperatureWrapper}>{props.aqi}</div>;
};

export default aqi;
