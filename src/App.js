import { useState } from "react";
import "./App.css";

export const App = () => {
  const [highlightText, setHighlightText] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sed maiores aperiam tenetur doloremque cum officia maxime quae eveniet libero repellendus expedita corporis tempore temporibus, dignissimos quis, corrupti repellat molestias for lio"
  );

  const MAX_LENGTH = 250;
  let isOverLimit = highlightText.length > MAX_LENGTH;

  const handleChange = (event) => {
    const text = event.target.value;
    const trimmedText = text.replace(/\s\s+/g, " "); // Reemplazar múltiples espacios por un solo espacio
    isOverLimit = trimmedText.length > MAX_LENGTH;
    setHighlightText(trimmedText);
  };

  return (
    <div className="App">
      <div className="BoxInput">
        <div className="Encabezado">
          <div className="Trade">
            <h3>Trade preference</h3>
            <h4>ℹ️</h4>
          </div>
          <div className="Contador">
            <h4 style={{ color: isOverLimit ? "#D96C89" : "#212126" }}>
              {highlightText.length}/{MAX_LENGTH}
            </h4>
          </div>
        </div>
        <div className="BackBody" style={{ border: isOverLimit ? '1px solid #D96C89' : '0.1px solid #212126' }}>
          <span>
            {highlightText.slice(0, MAX_LENGTH)}
            {isOverLimit && (
              <span
                style={{
                  color: "rgba(217, 108, 137, 1)",
                  background:'rgba(242, 208, 215, 1)',
                  zIndex:2
                }}
              >
                {highlightText.slice(MAX_LENGTH)}
              </span>
            )}
          </span>
        </div>

        <form>
          <textarea
            className="InputBody"
            style={{
              width: "560px",
              height: "264px",
              border: isOverLimit ? "1px solid #D96C89" : "0px solid #212126",
              backgroundColor: isOverLimit ? "rgba(242, 208, 215, 0.1)" : "#FDFCFC",
            }}
            value={highlightText}
            onChange={handleChange}
          ></textarea>
        </form>
      </div>
    </div>
  );
};
