import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../components/Context";

export default function Edituser({ match }) {
  const context = useContext(Context);
  let dummy = context.data.filter((x) => x.id === match.params.id);
  dummy = dummy[0];
  const [name, setName] = useState(dummy.name);
  const [email, setEmail] = useState(dummy.email);
  const [country, setCountry] = useState(dummy.country);
  const handleInput = ({ target: { name, value } }) => {
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "country") setCountry(value);
  };
  const [profileNotUpdated, setprofileNotUpdated] = useState(true);

  const submit = async (id) => {
    const { data } = await axios.put(
      `https://6177d55e9c328300175f5ba1.mockapi.io/CRUD-mock/${id}`,
      {
        name: name,
        email: email,
        country: country,
      }
    );
    const dummy_user = [...context.data];
    const index = dummy_user.findIndex((x) => x.id === match.params.id);
    dummy_user[index] = data;
    context.setData(dummy_user);
    setprofileNotUpdated(false);
  };

  return (
    <div>
      {profileNotUpdated ? (
        <>
          <h1 className="text-center mt-5">Edit {dummy.name}'s Details</h1>
          <div className="border mx-auto form_size border-secondary p-4">
            <div>
              <form>
                <label className="mt-1">
                  <b>Name : </b>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  onChange={handleInput}
                  value={name}
                  className="form-control mt-2"
                  placeholder="Enter Your Name"
                />
                <label className="mt-4">
                  <b>Email : </b>
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  onChange={handleInput}
                  value={email}
                  className="form-control mt-2"
                  placeholder="Enter Your Email"
                />
                <label className="mt-4">
                  <b>Country : </b>
                </label>
                <br />
                <input
                  type="text"
                  name="country"
                  onChange={handleInput}
                  value={country}
                  className="form-control mt-2"
                  placeholder="Country"
                />
              </form>
              <div className="mt-4 d-flex justify-content-center">
                <button
                  onClick={() => submit(dummy.id)}
                  type="button"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-4 d-flex justify-content-center">
          <h3>User Updated Successfully !</h3>
        </div>
      )}
    </div>
  );
}
