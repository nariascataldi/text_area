import "./App.css";
import { useState } from "react";

export const App = () => {
  const [highlightText, setHighlightText] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sed maiores aperiam tenetur doloremque cum officia maxime quae eveniet libero repellendus expedita corporis tempore temporibus, dignissimos quis, corrupti repellat molestias for lio"
  );

  const MAX_LENGTH = 250;

  const [isOverLimit, setIsOverLimit] = useState(false);
  const [resto, setResto] = useState("");

  const handleChange = (event) => {
    // setResto(event.target.value.slice(250));
    // setHighlightText(event.target.value.slice(0, 250));
    setHighlightText(event.target.value);
    setIsOverLimit(event.target.value.length > MAX_LENGTH);
  };
  const renderTextWithHighlight = () => {
    if (isOverLimit) {
      return (
        <>
          <span>{highlightText.slice(0, MAX_LENGTH)}<span style={{
            backgroundColor: "rgba(242, 208, 215, 1)", color: 'rgba(217, 108, 137, 1)'
          }}>{highlightText.slice(MAX_LENGTH)}</span></span>
        </>
      );
    } else {
      return <span>{highlightText}</span>;
    }
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
              <h4 style={{ color: "#D96C89" }}>{highlightText.length}/{MAX_LENGTH}</h4>
            ) : (
              <h4 style={{ color: "#212126" }}>{highlightText.length}/{MAX_LENGTH}</h4>
            )}
          </div>
        </div>
        <div className="BackBody" style={{ border: isOverLimit && '1px solid #D96C89' }}> {renderTextWithHighlight()} </div>

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
          ></textarea>
        </form>
      </div >
    </div >
  );
};