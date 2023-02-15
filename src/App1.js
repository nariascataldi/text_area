import { useState } from "react";

export const App = () => {
  const [text, setText] = useState("");
  const [isOverLimit, setIsOverLimit] = useState(false);

  const MAX_LENGTH = 5;

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
    setIsOverLimit(value.length > MAX_LENGTH);
  };

  const renderTextWithHighlight = () => {
    if (isOverLimit) {
      const highlightedText = text.slice(MAX_LENGTH);
      return (
        <>
          <span>{text.slice(0, MAX_LENGTH)}</span>
          <span style={{ backgroundColor: "yellow" }}>{highlightedText}</span>
        </>
      );
    } else {
      return <span>{text}</span>;
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        style={{ border: isOverLimit ? "2px solid red" : "1px solid black" }}
      />
      <p>Characters: {text.length}</p>
      <div>{renderTextWithHighlight()}</div>
    </div>
  );
};
