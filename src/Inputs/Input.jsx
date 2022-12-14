import React from "react";

function Input({
  lable,
  error,
  touched,
  name,
  id,
  icon,
  className,
  value,
  ...rest
}) {
  let borderClass = " border-gray-500 focus:border-green-500 ";
  if (error && touched) {
    borderClass = " border-red-500";
  }
  return (
    <div>
      <label htmlFor={id} className="sr-only ">
        {lable}
      </label>
      <div className="relative flex items-center mt-4">
        <div className="absolute ml-2 text-xl text-black">{icon}</div>
        <input
          name={name}
          className={
            "py-2 pl-10 border rounded-sm ring-gray-400 " +
            className +
            borderClass
          }
          id={id}
          {...rest}
        />
      </div>
      {touched && error && (
        <p className="mt-1 font-thin text-red-600">{error}</p>
      )}
    </div>
  );
}
export default Input;

//--------------------withformik ----------------//
// const field = useField(name);
// const [data, meta] = field;

// const { value, onChange, onBlur } = data;

// const { error, touched } = meta;
