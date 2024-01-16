import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = React.useState(true);
  const [display, setDisplay] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [isOperado, setIsOperado] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isThemeDark,
        setIsThemeDark,
        display,
        setDisplay,
        total,
        setTotal,
        isOperado,
        setIsOperado,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
