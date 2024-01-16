import React from "react";
import { GlobalContext } from "@storage/GlobalContext";

const Display = () => {
  const { display, setDisplay } = React.useContext(GlobalContext);
  return (
    <div>
      <div className=" h-40 dark:text-white flex justify-end items-center text-4xl font-bold">
        {display}
      </div>
      <div
        className="uppercase font-bold text-right dark:text-white cursor-pointer pb-3"
        onClick={() => setDisplay("")}
      >
        del
      </div>
    </div>
  );
};

export default Display;
