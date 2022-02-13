import classes from "./CardSlim.module.css";

const CardSlim = (props) => {
  {
    return (
      <div className={classes.Card} style={{ backgroundColor: props.color }}>
        {props.children}
      </div>
    );
  }
};

export default CardSlim;
