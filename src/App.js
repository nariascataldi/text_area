import { useState } from "react";
import "./App.css";

export const App = () => {
  const [highlightText, setHighlightText] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sed maiores aperiam tenetur doloremque cum officia maxime quae eveniet libero repellendus expedita corporis tempore temporibus, dignissimos quis, corrupti repellat molestias for 123typeof null // object 🤯"
  );

  const MAX_LENGTH = 250;
  let isOverLimit = highlightText.length > MAX_LENGTH;

  // Función que se ejecuta al cambiar el valor del textarea
  const handleChange = (event) => {
    const text = event.target.value;
    // Elimina múltiples espacios en blanco por uno solo
    const trimmedText = text.replace(/\s\s+/g, " "); 
    // Verifica si el texto supera el límite de caracteres
    isOverLimit = trimmedText.length > MAX_LENGTH;
    // Actualiza el estado del texto
    setHighlightText(trimmedText);
  };

  return (
    <div className="App">
      <div className="BoxInput">
        {/* Encabezado con título y contador de caracteres */}
        <div className="Encabezado">
          <div className="Trade">
            <h3>Desafío: Colorea cuando exceda el límite</h3>
            <h4>🍀</h4>
          </div>
          <div className="Contador">
          {/* cognac y azul marino */}
            <h4 style={{ color: isOverLimit ? "#6D4C41" : "#172B4D" }}>
              {highlightText.length}/{MAX_LENGTH}
            </h4>
          </div>
        </div>
        {/* Texto con límite de caracteres */}
        <div className="BackBody" style={{ border: isOverLimit ? '1px solid #D96C89' : '0px solid #212126' }}>
          <span>
            {/* Muestra los primeros caracteres dentro del límite */}
            {highlightText.slice(0, MAX_LENGTH)}
            {/* Muestra los caracteres restantes que superan el límite */}
            {isOverLimit && (
              <span
                style={{
                  color: "red",
                  background:'rgba(242, 208, 215, 1)',
                  zIndex:2
                }}
              >
                {highlightText.slice(MAX_LENGTH)}
              </span>
            )}
          </span>
        </div>
        {/* Textarea para ingresar el texto */}
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
