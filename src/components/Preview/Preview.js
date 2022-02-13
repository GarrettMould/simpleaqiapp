import { Component } from "react";
import classes from "./Preview.module.css";

const Preview = (props) => {
  return (
    <div className={classes.ErrorNoticeWrapper}>
      <img
        className={classes.PreviewImage}
        src={require("../../Assets/Images/global.png")}
      ></img>
      <p className={classes.NotFoundHeading}>
        Search a city to find AQI information
      </p>
    </div>
  );
};

export default Preview;
