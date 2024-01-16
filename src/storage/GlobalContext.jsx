import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = React.useState(true);
  const [display, setDisplay] = React.useState("");
  const [isOperado, setIsOperado] = React.useState(true);

  return (
    <GlobalContext.Provider
      value={{
        isThemeDark,
        setIsThemeDark,
        display,
        setDisplay,
        isOperado,
        setIsOperado,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
