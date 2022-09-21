import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useFormik } from "formik";
import * as yup from "yup";

function LoginPage() {
  function callLoginApi(values) {
    console.log("calLoginApi called");
    console.log(
      "sending data ,email:",
      values.email,
      " ,password:",
      values.password
    );
  }
  //{email:hello@lucky ,password:"3486838"}
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .min(6, "Password must minimum 6 charchters long"),
  });

  const {
    handleSubmit,
    values,
    handleChange,
    resetForm,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: callLoginApi,
    validationSchema: schema,
  });

  return (
    <div className="py-8 bg-gray-200 md:p-16">
      <div className="p-6 overflow-hidden bg-white rounded-sm md:p-24">
        <div className="flex flex-col justify-start gap-4 p-4 border border-gray-600 md:flex-row">
          <div className="px-4 ">
            <h2 className="font-serif text-3xl font-bold"> Log In</h2>

            <form onSubmit={handleSubmit} className="flex flex-col my-3 ">
              <div className="relative flex items-center mt-4">
                <HiOutlineMail className="absolute ml-2 text-xl text-black" />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm ring-gray-400 "
                  placeholder="Email address"
                  type="email"
                  name="email"
                  required
                  onBlur={handleBlur}
                  autoComplete="email"
                  id="email-address"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              {touched.email && (
                <p className="mt-1 font-thin text-red-600">{errors.email}</p>
              )}

              <div className="relative flex items-center mt-4">
                <RiLockPasswordLine className="absolute ml-2 text-xl text-black " />
                <input
                  value={values.password}
                  className="py-2 pl-10 border border-gray-500 rounded-sm "
                  placeholder="Password"
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  required
                  onChange={handleChange}
                  autoComplete="current-password"
                  id="password"
                />
              </div>
              {touched.password && (
                <p className="mt-1 font-thin text-red-600">{errors.password}</p>
              )}
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="self-start px-4 py-1 font-bold bg-red-400 rounded-sm hover:bg-red-600 hover:text-white"
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="self-start px-4 py-1 font-bold bg-blue-400 rounded-sm hover:bg-blue-600 hover:text-white"
                >
                  Reset
                </button>
              </div>
            </form>
            <Link to="/forget" className="font-semibold text-red-600 ">
              forget password ?
            </Link>
          </div>
          <div className="flex-col hidden gap-3 px-4 md:flex">
            <h1 className="font-serif text-4xl font-bold">Welcome Mate !!</h1>
            <p className="text-base font-semibold">
              Don't have an account ? Simply create an account by clicking sign
              up button .
            </p>

            <Link
              to="/signUp"
              className="self-start px-4 py-1 font-bold bg-red-400 rounded-sm hover:bg-red-600 hover:text-white"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex flex-col px-4 md:hidden">
            <hr className="my-6 border-gray-600 border-y-1" />
            <p className="text-base font-semibold ">
              Don't have an account ?{" "}
              <Link to="/signUp" className="font-semibold text-red-600 ">
                sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
