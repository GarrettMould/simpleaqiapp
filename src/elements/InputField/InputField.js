import { Component } from "react";
import { Container } from "react-bootstrap";

import classes from "./InputField.module.css";
const InputField = (props) => {
  return (
    <Container>
      <div className={classes.InputFieldWrapper}>
        <label htmlFor={props.name}>{props.label}</label>
        <input
          autoComplete="off"
          type={props.type}
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
    </Container>
  );
};

export default InputField;
