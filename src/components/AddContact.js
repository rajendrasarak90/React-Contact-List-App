import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  // hooks for updating user entered states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // function executes after clicking submit
  const handelSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && number
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already Exists!");
    }

    if (checkNumber) {
      return toast.error("This number already Exists!");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    // add contact to the store
    dispatch({ type: "ADD_CONTACT", payload: data }); 
    toast.success("Contact added successfully!!");
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className=" text-center ">Add Contact</h1>
      <div className="row ">
        <div className="col-md-6  mx-auto p-5">
          <form className="text-center" onSubmit={handelSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="submit"
                value="Add Contact"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
