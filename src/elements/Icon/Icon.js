import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <img
      src={require(`../../Assets/Images/${props.type}.png`)}
      alt="blah"
      className={classes.Icon}
    />
  );
};

export default Icon;
