import "./App.css";
import { useState } from "react";

export const App = () => {
  const [highlightText, setHighlightText] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sed maiores aperiam tenetur doloremque cum officia maxime quae eveniet libero repellendus expedita corporis tempore temporibus, dignissimos quis, corrupti repellat molestias for lio messi"
  );

  const [isOverLimit, setIsOverLimit] = useState(false);
  const [resto, setResto] = useState("");

  const handleChange = (event) => {
    const docientoscincuenta = event.target.value.slice(0, 250);
    const resto = event.target.value.slice(250);
    setResto(resto);
    setHighlightText(docientoscincuenta);
    setIsOverLimit(event.target.value.length > 250);
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
            {isOverLimit ? (
              <h4 style={{ color: "#D96C89" }}>{highlightText.length}/250</h4>
            ) : (
              <h4 style={{ color: "#212126" }}>{highlightText.length}/250</h4>
            )}
          </div>
        </div>
        <form>
          <textarea
            className="InputBody"
            style={{
              width: "560px",
              height: "264px",
              border: isOverLimit ? "1px solid #D96C89" : "1px solid #212126",
              backgroundColor: isOverLimit ? "#FFE6E6" : "#FDFCFC",
            }}
            value={highlightText}
            onChange={handleChange}
          >
            {resto && <span>{resto}</span>}
          </textarea>
        </form>
      </div>
    </div>
  );
}