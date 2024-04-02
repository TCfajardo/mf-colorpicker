import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "./components/ColorPicker";
import { useColor } from "./hooks/useColors";

import "./index.css";

const App = () => {
  const {color,handleChangeColor, handleSubmitSaveColor } = useColor();

  return (
    <div className="container">
      <ColorPicker
      color={color}
      handleChangeColor={handleChangeColor}
      handleSubmitSaveColor={handleSubmitSaveColor}
      />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
