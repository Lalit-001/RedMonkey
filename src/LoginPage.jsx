import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "./Inputs/Input";

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
    email: yup.string().email().required(" Must enter email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must minimum 6 charchters long"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="py-8 bg-gray-200 md:p-16">
      <div className="p-6 overflow-hidden bg-white rounded-sm md:p-24">
        <div className="flex flex-col justify-start gap-4 p-4 border border-gray-600 md:flex-row">
          <div className="px-4 ">
            <h2 className="font-serif text-3xl font-bold"> Log In</h2>
            <Formik
              initialValues={initialValues}
              onSubmit={callLoginApi}
              validationSchema={schema}
              validateOnMount={true}
            >
              <Form className="flex flex-col my-3 ">
                <Input
                  lable="Email-adress"
                  id="email-address"
                  placeholder="Email address"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  icon={<HiOutlineMail />}
                  className=""
                />
                <Input
                  lable="password"
                  id="password"
                  placeholder="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  icon={<RiLockPasswordLine />}
                  className=""
                />

                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="self-start px-4 py-1 font-bold bg-red-400 rounded-sm hover:bg-red-600 hover:text-white disabled:bg-red-200 disabled:text-gray-500"
                  >
                    Log In
                  </button>

                  {/* <button
                    type="button"
                    onClick={resetForm}
                    className="self-start px-4 py-1 font-bold bg-blue-400 rounded-sm hover:bg-blue-600 hover:text-white"
                  >
                    Reset
                  </button> */}
                </div>
              </Form>
            </Formik>
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
