import React from "react";
import Button from "@components/Button";
import { GlobalContext } from "@storage/GlobalContext";

const Main = () => {
  const { display, setDisplay, isOperado, setIsOperado } =
    React.useContext(GlobalContext);

  const handleClick = ({ target }) => {
    const regexNumeros = /^\d+$/;
    const regexOperador = /^[+\-*/]+$/;

    if (regexNumeros.test(target.innerText)) {
      setDisplay((prev) => prev + target.innerText);
      setIsOperado(false);
      return;
    }
    if (regexOperador.test(target.innerText) && !isOperado) {
      setDisplay((prev) => prev + target.innerText);
      setIsOperado(true);
      return;
    }

    try {
      if (target.innerText == "=" && !isOperado) {
        setDisplay(eval(display));
      }
    } catch {
      setDisplay("ERRO");
    }
  };

  const dataBtn = [
    {
      label: "7",
      // onClick: handleClick,
    },
    {
      label: "8",
      // onClick: handleClick,
    },
    {
      label: "9",
      // onClick: handleClick,
    },
    {
      label: "/",
      // onClick: handleClick,
    },
    {
      label: "4",
      // onClick: handleClick,
    },
    {
      label: "5",
      // onClick: handleClick,
    },
    {
      label: "6",
      // onClick: handleClick,
    },
    {
      label: "-",
      // onClick: handleClick,
    },
    {
      label: "1",
      // onClick: handleClick,
    },
    {
      label: "2",
      // onClick: handleClick,
    },
    {
      label: "3",
      // onClick: handleClick,
    },
    {
      label: "*",
      // onClick: handleClick,
    },
    {
      label: ",",
      // onClick: handleClick,
    },
    {
      label: "0",
      // onClick: handleClick,
    },
    {
      label: "=",
      // onClick: handleClick,
    },
    {
      label: "+",
      // onClick: handleClick,
    },
  ];

  return (
    <main className="grid grid-cols-4 gap-2 h-72">
      {dataBtn.map(({ label }, id) => (
        <Button key={id} label={label} onClick={handleClick} />
      ))}
    </main>
  );
};

export default Main;
