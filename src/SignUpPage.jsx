import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdPermIdentity } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import * as yup from "yup";
import { Formik, Form } from "formik";
import Input from "./Inputs/Input";

function SignUpPage() {
  function callSignupApi(values) {
    console.log("callSignupApi called");
  }

  //{email:hello@lucky ,password:"3486838"}
  const schema = yup.object().shape({
    name: yup.string().min(3, "too short name"),
    mobileNo: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10, " A mobile number is minimum 10 digit")
      .required("A phone number is required"),
    email: yup.string().email().required(),
    newPassword: yup
      .string()
      .required("this is reqired field")
      .min(6, "Password must minimum 6 charchters long"),
    confirmPassword: yup
      .string()
      .required("confirm password")
      .min(6, "Password must minimum 6 charchters long"),
  });

  const initialValues = {
    name: "",
    mobileNo: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  };

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
            <Formik
              initialValues={initialValues}
              onSubmit={callSignupApi}
              validationSchema={schema}
              validateOnMount
            >
              <Form className="flex flex-col items-start justify-start gap-3 px-4 rounded-md">
                <Input
                  placeholder="Name "
                  type="text"
                  required
                  name="name"
                  id="name"
                  lable="Name"
                  icon={<MdPermIdentity />}
                />

                <Input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Mobile Number"
                  type="tel"
                  autoComplete="tel"
                  required
                  name="mobileNo"
                  icon={<BsTelephone />}
                />

                <Input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Email address"
                  type="email"
                  required
                  name="email"
                  icon={<HiOutlineMail />}
                  id="email-adress"
                />

                <Input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Create password"
                  type="password"
                  required
                  name="newPassword"
                  icon={<RiLockPasswordLine />}
                  id="newPassword"
                />

                <Input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Confirm password"
                  type="password"
                  required
                  name="confirmPassword"
                  icon={<RiLockPasswordLine />}
                  id="confirm-password"
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
              </Form>
            </Formik>
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
export default SignUpPage;
