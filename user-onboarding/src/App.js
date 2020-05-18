import React, { useState } from "react";
import cartman from "./cartman.svg";
import "./App.css";
import UserForm from "./Components/userForm";

let App = () => {
  return (
    <div className="App">
      <header className="header1">
        <img src={cartman} className="App-logo" alt="logo" />
        <h1>NEW USER FORM</h1>
      </header>
      <body className="body1">
        <UserForm />
      </body>
    </div>
  );
  }
export default App;
