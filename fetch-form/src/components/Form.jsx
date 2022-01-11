import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Form.css";

const Form = () => {
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const respData = await axios.get(
        "https://frontend-take-home.fetchrewards.com/form"
      );
      setData(respData.data);
    };
    fetchData();
  }, []);

  const handleChange = (ev) => {
    setUserData({
      ...userData,
      [ev.target.name]: ev.target.value,
    });
  };

  const onSignUp = async (ev) => {
    ev.preventDefault();
    try {
      await axios.post(
        "https://frontend-take-home.fetchrewards.com/form",
        userData
      );
      setUserData({
        name: "",
        email: "",
        password: "",
        occupation: "",
        state: "",
      });
      alert("Sign up successful!");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  const { name, email, password, occupation, state } = userData;
  const occupationList = data.occupations;
  const stateList = data.states;

  return (
    <div className="master-div">
      <div className="form-container">
        <h3>Sign Up</h3>
        <form className="form" onSubmit={onSignUp}>
          <label>
            Full Name<span className="red">*</span>
          </label>
          <input
            className="text-input"
            id="name"
            required
            type="text"
            name="name"
            value={name}
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
          <label>
            Email Address<span className="red">*</span>
          </label>
          <input
            className="text-input"
            id="email"
            required
            type="text"
            name="email"
            value={email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
          <label>
            Password<span className="red">*</span>
          </label>
          <input
            className="text-input"
            id="password"
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="list-wrapper">
            <label mode="dropdown" className="menu">
              Select Occupation<span className="red">*</span>
              <br />
              <select required name="occupation" onChange={handleChange}>
                {occupationList
                  ? occupationList.map((occupation, idx) => (
                      <option key={idx} value={occupation}>
                        {occupation}
                      </option>
                    ))
                  : null}
              </select>
            </label>
            <br />
            <label mode="dropdown" className="menu">
              Select Your State<span className="red">*</span>
              <br />
              <select required name="state" onChange={handleChange}>
                {stateList
                  ? stateList.map((state, idx) => (
                      <option key={idx} value={state.abbreviation}>
                        {state.abbreviation}
                      </option>
                    ))
                  : null}
              </select>
            </label>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
          <p className="required-text">
            <span className="red">*</span>Required Field
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;
