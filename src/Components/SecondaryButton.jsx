import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <button className="w-[110px] h-[30px] xl:w-[150px] xl:h-[50px] font-medium  border border-[#3984F4] rounded-[40px] text-[#3984F4] capitalize lg:mx-3 my-2">
      {children}
    </button>
  );
};

export default SecondaryButton;
