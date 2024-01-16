import React from "react";
import "./App.css";
import Container from "@components/Container";
import { GlobalContext } from "@storage/GlobalContext";

function App() {
  const { isThemeDark, setIsThemeDark } = React.useContext(GlobalContext);
  return (
    <div
      className={`p-2 bg-pink-600 h-screen w-screen ${isThemeDark && "dark"}`}
    >
      <Container />
    </div>
  );
}

export default App;
