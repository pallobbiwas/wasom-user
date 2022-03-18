import React, { useEffect, useState } from "react";
import User from "./User/User";

const Users = (props) => {
  const {SetCounter} = (props);
  return (
    <div>
      <h1>All users here</h1>
      <LoadData SetCounter = {SetCounter}></LoadData>
    </div>
  );
};
// load data from api component
const LoadData = (props) => {
  const {SetCounter} = (props);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);


  return (
    <div className=" row">
      {
          customers.map(customer => <User SetCounter = {SetCounter} customer = {customer} key={customer.id}></User>)
      }
    </div>
  );
};
export default Users;
