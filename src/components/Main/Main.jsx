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
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    ",",
    "0",
    "=",
    "+",
  ];

  return (
    <main className="grid grid-cols-4 gap-2 h-72">
      {dataBtn.map((obj, id) => (
        <Button key={id} label={obj} onClick={handleClick} />
      ))}
    </main>
  );
};

export default Main;
