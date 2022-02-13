import classes from "./dateForecast.module.css";

const DateForecast = (props) => {
  return (
    <div className={classes.Card}>
      <div className={`classes.font ${classes.individualDayWrapper}`}>
        {props.date}
      </div>
    </div>
  );
};

export default DateForecast;
