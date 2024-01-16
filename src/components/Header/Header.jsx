import { FaMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { GlobalContext } from "@storage/GlobalContext";
import React from "react";

const Header = () => {
  const { isThemeDark, setIsThemeDark } = React.useContext(GlobalContext);

  const handleTheme = () => {
    setIsThemeDark((isThemeDark) => !isThemeDark);
  };

  return (
    <div className="flex justify-end text-xl text-pink-600">
      {isThemeDark ? (
        <FaMoon className="cursor-pointer" onClick={handleTheme} />
      ) : (
        <IoSunnyOutline className="cursor-pointer" onClick={handleTheme} />
      )}
    </div>
  );
};

export default Header;
