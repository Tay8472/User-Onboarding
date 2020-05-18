import React from "react";
import "./userCard.css";

let UserCard = (props) => {
  return (
    <div>
    {props.cards.map(data => (
      <div className="card" key={data.id}>
        <h1>Name</h1>
        <p>Email</p>
        <p>Password</p>
        <p>Agreed To Terms</p>
      </div>
  ))}
    </div>
  );
};

export default UserCard;