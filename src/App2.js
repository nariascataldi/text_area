import { useState } from 'react';

function App() {
  const [highlightText, setHighlightText] = useState('');

  const handleChange = (event) => {
    setHighlightText(event.target.value);
  };

  const highlightedText = highlightText.length > 250 ? (
    <>
      {highlightText.slice(0, 250)}
      <span className="highlight">{highlightText.slice(250)}</span>
    </>
  ) : highlightText;

  return (
    <div>
      <textarea value={highlightText} onChange={handleChange} />
      <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
    </div>
  );
}

export default App;
