import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="w-[110px] h-[30px] xl:w-[150px] xl:h-[50px] font-medium  bg-[#3984F4] rounded-[40px] text-white capitalize">
      {children}
    </button>
  );
};

export default PrimaryButton;
