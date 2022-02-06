import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../components/Context";
import EditCreateTemplate from "../components/Edit_create_template";

export default function Createuser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [userNotCreated, setuserNotCreated] = useState(true);
  const context = useContext(Context);

  // Updating the API
  const handleSubmit = async () => {
    const { data } = await axios.post(
      "https://6177d55e9c328300175f5ba1.mockapi.io/CRUD-mock",
      {
        name: name,
        email: email,
        company: company,
        country: country,
        state: state,
        city: city,
      }
    );
    const dummy_data = [...context.data];
    dummy_data.push(data);
    context.setData(dummy_data);
    setuserNotCreated(false);
  };
  return (
    <>
      {userNotCreated ? (
        <>
          <div className="d-flex justify-content-center">
            <h2>Create New User</h2>
          </div>
          <EditCreateTemplate
            setName={setName}
            setEmail={setEmail}
            setCompany={setCompany}
            setCountry={setCountry}
            setState={setState}
            setCity={setCity}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <>
          <div className="mt-4 d-flex justify-content-center">
            <h3>User Created Successfully ! </h3>
          </div>
        </>
      )}
    </>
  );
}
