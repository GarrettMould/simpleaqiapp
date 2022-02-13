import AqiForecast from "../Forecast/aqiForecast/aqiForecast";
import DateForecast from "../Forecast/dateForecast/dateForecast";
import classes from "./CardForecast.module.css";

const CardForecast = (props) => {
  {
    return (
      <div className={classes.forecastWrapper}>
        <DateForecast date={props.date}></DateForecast>
        <AqiForecast aqi={props.aqi}></AqiForecast>
      </div>
    );
  }
};

export default CardForecast;
