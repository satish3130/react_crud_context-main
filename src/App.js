import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Createuser from "./pages/CreateUser";
import Home from "./pages/Home";
import { Context } from "../src/components/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./pages/Profile";
import Edituser from "./pages/EditUser";
import Edituserdetails from "./pages/EditUserDetails";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://6177d55e9c328300175f5ba1.mockapi.io/CRUD-mock"
    );
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Context.Provider value={{ data, setData }}>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/createuser" component={Createuser} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/edituser/:id" component={Edituser} />
            <Route path="/edituserdetails/:id" component={Edituserdetails} />
          </Switch>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
