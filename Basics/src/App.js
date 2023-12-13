import React from "react";
import ReactDOM from "react-dom/client"; // Fix the import statement
import Header from "./components/Header";
import Body from "./components/Body";
import "../index.css";
const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);