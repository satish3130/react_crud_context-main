import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../components/Context";
import EditCreateTemplate from "../components/Edit_create_template";

export default function Edituserdetails({ match }) {
  const id = match.params.id;
  const context = useContext(Context);
  let selected_data = context.data.filter((x) => x.id === id);
  selected_data = selected_data[0];
  const temp_name = selected_data.name;
  const [name, setName] = useState(selected_data.name);
  // console.log(name);
  const [email, setEmail] = useState(selected_data.email);
  const [company, setCompany] = useState(selected_data.company);
  const [country, setCountry] = useState(selected_data.country);
  const [state, setState] = useState(selected_data.state);
  const [city, setCity] = useState(selected_data.city);
  const [profileNotCreated, setprofileNotCreated] = useState(true);

  const handleSubmit = async () => {
    const { data } = await axios.put(
      `https://6177d55e9c328300175f5ba1.mockapi.io/CRUD-mock/${id}`,
      {
        name: name,
        email: email,
        company: company,
        country: country,
        state: state,
        city: city,
      }
    );
    let dummy_data = [...context.data];
    const index = dummy_data.findIndex((x) => x.id === id);
    dummy_data[index] = data;
    context.setData(dummy_data);
    setprofileNotCreated(false);
  };
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      {profileNotCreated ? (
        <>
          <h1 className="mb-3">Edit the user {temp_name}</h1>
          <EditCreateTemplate
            setName={setName}
            setEmail={setEmail}
            setCompany={setCompany}
            setCountry={setCountry}
            setState={setState}
            setCity={setCity}
            id={id}
            dummy={"dummy"}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <div className="mt-4 d-flex justify-content-center">
          <h3>User Details Updated Successfully ! </h3>
        </div>
      )}
    </div>
  );
}
