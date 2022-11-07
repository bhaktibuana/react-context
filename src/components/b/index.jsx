import React, { useContext } from "react";
import { ColorContext } from "../../context";

const ComponentB = () => {
  const colorCtx = useContext(ColorContext);
  const { selectedColor, onColorChange } = colorCtx;

  return (
    <>
      <div
        style={{ backgroundColor: selectedColor, width: "100%", height: 500 }}
      />

      <h3>selected color: {selectedColor}</h3>

      <button onClick={() => onColorChange("red")}>switch to red</button>
    </>
  );
};

export default ComponentB;
