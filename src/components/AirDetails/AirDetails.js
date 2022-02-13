import { Component } from "react";

import classes from "./AirDetails.module.css";
import AQI from "./AQI/AQI.js";
import Date from "./Date/Date.js";
import Description from "./Description/Description.js";
import Icon from "../../elements/Icon/Icon";

const AirDetails = (props) => {
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <div className={classes.WeatherIconWrapper}>
        <Icon type={props.type} />
      </div>
      <div className={classes.WeatherDataWrapper}>
        <AQI aqi={props.aqi} />
        <Description description={props.description} />
        <Date />
      </div>
    </div>
  );
};

export default AirDetails;
