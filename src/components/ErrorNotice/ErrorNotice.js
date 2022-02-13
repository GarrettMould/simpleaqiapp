import classes from "./ErrorNotice.module.css";
import button from "../../elements/Button/Button";
import { Button } from "react-bootstrap";

const ErrorNotice = (props) => {
  return (
    <div className={classes.ErrorNoticeWrapper}>
      <h1 className={classes.NotFound404}>404</h1>
      <div className={classes.ErrorTextWrapper}>
        <h2 className={classes.NotFoundHeading}></h2>
        <p className={classes.NotFoundDetails}>
          Oops! We couldn't find that city.
        </p>
        <Button
          name="tryAgain"
          type="button"
          position="onErrorNotice"
          onClick={props.onClickHandler}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default ErrorNotice;
