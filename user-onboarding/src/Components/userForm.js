import React, { useState } from "react";
import "./userForm.css";
import * as yup from "yup";
import axios from "axios";

let formSchema = yup.object().shape({
  name: yup.string().min(2, "needs two dude!").required("Name is a required field"),
  email: yup.string().email().required("Must include email address"),
  password: yup.string().required("Must type in a password"),
  terms: yup.boolean().oneOf([true]),
});

let UserForm = (props) => {
  let [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  let [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  let formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    console.log("done bitch");
  };

  let validate = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0],
        });
      });
  };

  let inputChange = (e) => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  return (
    <form className="entireForm" onSubmit={formSubmit}>
      <label className="juan" htmlFor="name">
        Your Name: <br />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <br />
      <label className="juan" htmlFor="email">
        Your Email: <br />
        <input
          type="eamil"
          name="email"
          id="email"
          placeholder="Enter Email"
          vlaue={formState.email}
          onChange={inputChange}
        />
        {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
      </label>
      <br />
      <label className="juan" htmlFor="password">
        Create A Password: <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          value={formState.password}
          onChange={inputChange}
        />
      </label>
      <br />
      <label className="juan" htmlFor="checkbox">
        Check to Agree to Terms: <br />
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
      </label>
      <br />
      <button className="submitButton">Submit</button>
    </form>
  );
};

export default UserForm;
