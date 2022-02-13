import { Component } from "react";
import classes from "./aqiForecast.module.css";

const AqiForecast = (props) => {
  return (
    <div className={classes.aqiForecastWrapper}>
      <div className={classes.individualDayWrapper}>{props.aqi}</div>
    </div>
  );
};

export default AqiForecast;
