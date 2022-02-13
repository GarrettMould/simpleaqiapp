import { Component } from "react";
import AqiForecast from "./aqiForecast/aqiForecast";
import DateForecast from "./dateForecast/dateForecast";

import classes from "./Forecast.module.css";

const Forecast = (props) => {
  return (
    <div className={classes.forecastWrapper}>
      <DateForecast
        dateOne={props.dateOne}
        dateTwo={props.dateTwo}
        dateThree={props.dateThree}
      />
      <AqiForecast
        aqiOne={props.aqiOne}
        aqiTwo={props.aqiTwo}
        aqiThree={props.aqiThree}
      />
    </div>
  );
};

export default Forecast;
