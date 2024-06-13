import React from "react";

const ButtonComponent = ({ children, styles }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-bold text-[18px] text-primary  bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {children}
  </button>
);

export default ButtonComponent;
