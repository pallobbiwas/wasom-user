import React from "react";
import "./User.css";

const User = (props) => {
  const { SetCounter }= props;
  console.log(SetCounter);
  const { title, price, /* description, */ category, image, rating } = props.customer;
  const { rate, count } = rating;
  return (
    <div className=" col-md-4 cards">
      <h2>Name: {title.slice(0, 10)}</h2>
      <img className="w-50 img-fluid" src={image} alt="" />
      <div>
        <button>{price} .TK</button>
        <button>{category}</button>
      </div>
      <p>
        <span>{rate}</span>
        {count}
        <span></span>
      </p>
      <button>Details</button>
      <button onClick={SetCounter}>Order</button>
      
    </div>
  );
};

export default User;
