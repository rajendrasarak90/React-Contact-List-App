import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = [];
    const promise = async () => {
      // fetching all the contacts from API endpoint
      await fetch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((json) => {
          json.forEach((contact) => {
            // pushing data to the array
            data.push({
              id: contact.id,
              name: contact.name,
              number: contact.phone,
              email: contact.email,
            });
          });
        });
        // loading the data into the redux store using dispatch
      dispatch({ type: "FETCH_CONTACTS", payload: data });
    };
    promise();
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route path="/edit/:id" element={<EditContact />}></Route>
      </Routes>
      <ToastContainer autoClose={2000} theme="colored" />
    </div>
  );
};

export default App;
