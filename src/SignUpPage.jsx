import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { MdPermIdentity } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import * as yup from "yup";
import { Formik, Form, withFormik } from "formik";
import Input from "./Inputs/Input";
import axios from "axios";
// import { useContext } from "react";
// import { userContext } from "./App";

function callSignupApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.name,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      console.log("sigup api called", user, token);
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      console.log("invalid credential");
    });
}

const schema = yup.object().shape({
  name: yup.string().min(3, "too short name"),

  email: yup.string().email().required(),
  password: yup
    .string()
    .required("this is reqired field")
    .min(6, "Password must minimum 6 charchters long"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

function SignUpPage({
  handleSubmit,
  handleBlur,
  values,
  errors,
  handleChange,
  touched,
}) {
  // if (user) {
  //   return <Navigate to="/" />;
  // }

  return (
    <div className="py-8 bg-gray-200 md:p-24">
      <div className="flex flex-col items-center px-8 py-12 overflow-hidden bg-white">
        <h1 className="mb-8 font-serif text-3xl font-bold"> Sign Up </h1>
        <div className="flex justify-center gap-4 p-8 border border-gray-500">
          <div className="hidden max-w-sm rounded-md md:block ">
            <img
              className="w-full"
              src="https://cdn.discordapp.com/attachments/998848043967320082/1021660829575299112/signup-ss-crop.jpg"
            />
          </div>
          <div className="flex flex-col ">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start justify-start gap-3 px-4 rounded-md"
            >
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.name}
                error={errors.name}
                value={values.name}
                placeholder="Name "
                type="text"
                required
                name="name"
                id="name"
                lable="Name"
                icon={<MdPermIdentity />}
              />

              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.email}
                error={errors.email}
                value={values.email}
                className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                placeholder="Email address"
                type="email"
                required
                name="email"
                icon={<HiOutlineMail />}
                id="email-adress"
              />

              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                error={errors.password}
                value={values.password}
                className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                placeholder="Create password"
                type="password"
                required
                name="password"
                icon={<RiLockPasswordLine />}
                id="newPassword"
              />

              <div className="flex justify-between space-x-2">
                <button
                  type="submit"
                  className="p-2 mt-4 font-bold bg-red-500 rounded-sm disabled:bg-red-200 disabled:text-gray-500 font-bol hover:bg-red-800 hover:text-white"
                >
                  Sign up now
                </button>
                {/* <button
                    onClick={resetForm}
                    type="button"
                    className="p-2 mt-4 font-bold bg-blue-500 rounded-sm font-bol hover:bg-blue-800 hover:text-white"
                  >
                    Reset Form
                  </button> */}
              </div>
            </form>

            <div className="flex gap-2 px-4 mt-6">
              <p>Already a member ?</p>
              <Link
                to="/login"
                className="font-bold text-red-500 hover:cursor-pointer"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const myHOC = withFormik({
  initialValues: initialValues,
  handleSubmit: callSignupApi,
  validationSchema: schema,
  validateOnMount: true,
});
export default myHOC(SignUpPage);
