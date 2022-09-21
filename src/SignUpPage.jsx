import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdPermIdentity } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import * as yup from "yup";
import { useFormik } from "formik";

function SignUpPage() {
  function callSignupApi(values) {
    console.log("callSignupApi called");
    console.log(
      "sending data ,name ,mobileNo. , email , newPassword , confirmPassword",
      values.name,
      values.email,
      values.mobileNo,
      values.newPassword,
      values.confirmPassword
    );
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
      .required()
      .min(6, "Password must minimum 6 charchters long"),
    confirmPassword: yup
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
      name: "",
      mobileNo: "",
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
    onSubmit: callSignupApi,
    validationSchema: schema,
  });

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
              <div className="relative flex items-center ">
                <MdPermIdentity className="absolute ml-2 text-xl text-black " />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Name "
                  type="text"
                  required
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {touched.name && (
                <p className="mt-1 font-thin text-red-600">{errors.name}</p>
              )}
              <div className="relative flex items-center ">
                <BsTelephone className="absolute ml-2 text-xl text-black " />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Mobile Number"
                  type="tel"
                  autoComplete="tel"
                  required
                  name="mobileNo"
                  value={values.mobileNo}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {touched.mobileNo && (
                <p className="mt-1 font-thin text-red-600">{errors.mobileNo}</p>
              )}
              <div className="relative flex items-center ">
                <HiOutlineMail className="absolute ml-2 text-xl text-black " />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Email address"
                  type="email"
                  required
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {touched.email && (
                <p className="mt-1 font-thin text-red-600">{errors.email}</p>
              )}
              <div className="relative flex items-center ">
                <RiLockPasswordLine className="absolute ml-2 text-xl text-black " />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Create password"
                  type="password"
                  required
                  name="newPassword"
                  value={values.newPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {touched.newPassword && (
                <p className="mt-1 font-thin text-red-600">
                  {errors.newPassword}
                </p>
              )}
              <div className="relative flex items-center ">
                <RiLockPasswordLine className="absolute ml-2 text-xl text-black " />
                <input
                  className="py-2 pl-10 border border-gray-500 rounded-sm focus:ring-gray-600 "
                  placeholder="Confirm password"
                  type="password"
                  required
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
              {touched.confirmPassword && (
                <p className="mt-1 font-thin text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
              <div className="flex justify-between space-x-2">
                <button
                  type="submit"
                  className="p-2 mt-4 font-bold bg-red-500 rounded-sm font-bol hover:bg-red-800 hover:text-white"
                >
                  Sign up now
                </button>
                <button
                  onClick={resetForm}
                  type="button"
                  className="p-2 mt-4 font-bold bg-blue-500 rounded-sm font-bol hover:bg-blue-800 hover:text-white"
                >
                  Reset Form
                </button>
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
export default SignUpPage;
