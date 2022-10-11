import React from "react";
import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { WithAlert } from "./WithProvider";

const themeMap = {
  sucess: {
    Icon: AiOutlineCheckCircle,
    color: " border-teal-500  text-teal-900 bg-teal-100",
    colorIcon: " text-teal-500",
  },
  error: {
    Icon: BiErrorCircle,
    color: " border-red-500  text-red-900 bg-red-100",
    colorIcon: " text-red-500",
  },
};

const Alert = ({ alert, removeAlert }) => {
  useEffect(() => {
    if (alert) {
      const timeout = setTimeout(removeAlert, 3 * 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alert]);

  if (!alert) {
    return <></>;
  }

  const { type, message } = alert;
  const { Icon, color, colorIcon } = themeMap[type];

  return (
    <div
      className={"px-3 py-3 m-3  border-t-4  rounded-b shadow-md" + color}
      role="alert"
    >
      <div className="flex justify-between">
        <div className="flex">
          <div className="py-1">
            <div className={"w-6 h-6 mr-4 text-2xl" + colorIcon}>
              <Icon />
            </div>
          </div>
          <div>
            <p className="font-bold">{type}</p>
            <p className="text-sm">{message}</p>
          </div>
        </div>
        <button
          onClick={removeAlert}
          className="self-center px-1 font-semibold border border-gray-400 rounded-sm shadow-sm "
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default WithAlert(Alert);
