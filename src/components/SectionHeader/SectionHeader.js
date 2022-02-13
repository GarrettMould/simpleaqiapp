import classes from "./SectionHeader.module.css";
const SectionHeader = () => {
  return (
    <>
      <div className={classes.headerWrapper}>
        <div className={classes.header}>AQI Forecast</div>
      </div>
    </>
  );
};

export default SectionHeader;
