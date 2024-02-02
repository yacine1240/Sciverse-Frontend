import AuthPagesBg from "../components/layout/AuthPagesBg";
import { logoOrangeBlack } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { optionsField, optionsNature } from "../constants";
import { UserContext } from "../contexts/UserContext";
import { routes } from "../routes/routes";
import axios from "axios";

const AddModerator = () => {
  const navigate = useNavigate();
  const { userProfile } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isOpenNature, setIsOpenNature] = useState(false);
  const [isOpenField, setIsOpenField] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    nature: "",
    field: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleListNature = () => {
    setIsOpenNature(!isOpenNature);
  };

  const toggleListField = () => {
    setIsOpenField(!isOpenField);
  };

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (data.password !== data.confirmPassword)
      alert("Passwords do not match. Please re-enter your password.");
    else {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/moderator/create",
          data,
          {
            headers: {
              Authorization: `Bearer ${userProfile.access_token}`,
            },
          }
        );
        if (response.data.error) {
          alert("Error: " + response.data.error);
        } else {
          setFormSubmitted(true);
        }
      } catch (error) {
        console.error("Error:", error);

        // Check if there is a response in the error object
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response headers:", error.response.headers);

          // Handle specific HTTP status codes if needed
          if (error.response.status === 401) {
            alert("Unauthorized: Please check your credentials.");
          } else {
            alert("An error occurred. Please try again later.");
          }
        } else if (error.request) {
          console.error("No response received. Request:", error.request);
          alert(
            "No response received from the server. Please try again later."
          );
        } else {
          console.error("Error message:", error.message);
          alert("An unexpected error occurred. Please try again later.");
        }
      }
    }
  };

  useEffect(() => {
    if (formSubmitted) alert("moderator added succefully");
  }, [formSubmitted]);

  const handleAnnuler = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div className="w-full h-fit relative flex justify-start items-center flex-col bg-grey pt-4 max-md:pt-2">
      <div className="flex flex-row w-1/2 justify-center items-center py-2 ">
        <form
          className="flex flex-col w-full justify-center items-center gap-4"
          onSubmit={handleSubmit}
        >
          {/* ********** full name input ********** */}
          <div className="flex flew-row justify-center items-center w-full gap-3">
            <div className="flex flex-1 flex-col">
              <label className="font-poppins text-xs pl-1 text-[#190B28] my-1">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                required
                className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
                placeholder="Enter your first name"
              />
            </div>

            <div className="flex flex-1 flex-col">
              <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                required
                className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          {/* ************************************* */}
          {/* ********* Nature input ********** */}
          <div className="flex w-full flex-col">
            <label className="block mb-1 ml-2 text-sm font-poppins font-medium opacity-50">
              Profession:
            </label>
            <div className="flex flew-row justify-center items-center w-full gap-3">
              <div className="relative flex-1">
                <div>
                  <select
                    name="nature"
                    id="nature"
                    onClick={toggleListNature}
                    value={data.nature}
                    onChange={handleChange}
                    required
                    className="register-input appearance-none signup-select"
                  >
                    <option value={""} key={null}>
                      You are a ...
                    </option>
                    {optionsNature.map((nature) => {
                      return (
                        <option value={nature.value} key={nature.label}>
                          {nature.label}
                        </option>
                      );
                    })}
                  </select>
                  {isOpenNature ? (
                    <FaAngleUp className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                  ) : (
                    <FaAngleDown className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                  )}
                </div>
              </div>

              <div className="relative flex-1">
                <div>
                  <select
                    name="field"
                    id="field"
                    required
                    value={data.field}
                    onClick={toggleListField}
                    onChange={handleChange}
                    className="register-input appearance-none signup-select"
                  >
                    <option value={""} key={null}>
                      Field
                    </option>
                    {optionsField.map((field) => {
                      return (
                        <option value={field.value} key={field.label}>
                          {field.label}
                        </option>
                      );
                    })}
                  </select>
                  {isOpenField ? (
                    <FaAngleUp className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                  ) : (
                    <FaAngleDown className="absolute top-3.5 right-0 mr-4 text-slate-500" />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* ************************************* */}

          {/* ************ email input ************ */}
          <div className="flex w-full flex-col">
            <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
              Email adress:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
              className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
              placeholder="Enter your email address"
            />
          </div>
          {/* ************************************* */}

          {/* *********** password input ********** */}
          <div className="flex w-full flex-col">
            <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
              Password:
            </label>
            <div className="relative flex w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
              />
              <div
                onClick={togglePasswordVisibility}
                className={`absolute inset-y-0 right-0 flex items-center mr-6 text-gray-500 cursor-pointer`}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-black text-opacity-90 h-4 w-4" />
                ) : (
                  <FaEye className="text-black text-opacity-90 h-4 w-4" />
                )}
              </div>
            </div>
          </div>
          {/* ************************************* */}

          {/* ******* confirm password input ****** */}
          <div className="flex w-full flex-col">
            <label className=" font-poppins text-xs pl-1 text-[#190B28] my-1  ">
              Confirm Password:
            </label>
            <div className="relative flex w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
                className="py-2.5 px-6 w-full rounded-full bordre-none bg-[#E87D00] bg-opacity-[15%] text-base text-black text-opacity-100"
              />
              <div
                onClick={toggleConfirmPasswordVisibility}
                className={`absolute inset-y-0 right-0 flex items-center mr-6 text-gray-500 cursor-pointer`}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="text-black text-opacity-90 h-4 w-4" />
                ) : (
                  <FaEye className="text-black text-opacity-90 h-4 w-4" />
                )}
              </div>
            </div>
          </div>
          {/* ************************************* */}
          <div className="w-full flex justify-center items-center gap-6 mt-2 bg-grey">
            <button
              onClick={handleAnnuler}
              className="lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-10 px-7 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#A7A7A7]"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="lg:text-lg text-sm font-poppins font-bold text-white lg:py-2.5 py-2 lg:px-6 px-5 rounded-[20px] shadow-md shadow-[rgba(0,0,0,0.25)] bg-[#E87D00]"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModerator;
