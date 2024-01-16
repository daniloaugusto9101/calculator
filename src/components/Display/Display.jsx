import React from "react";
import { GlobalContext } from "@storage/GlobalContext";

const Display = () => {
  const { display } = React.useContext(GlobalContext);
  return (
    <div className="h-40 dark:text-white flex justify-end items-center text-4xl font-bold">
      {display}
    </div>
  );
};

export default Display;
