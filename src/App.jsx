import './App.css';
import { useState } from 'react';
import { generate } from 'random-words';

function App() {
  // const text = generate({ max: 30, maxLength: 6, join: ' ' });
  const text = generate({ exactly: 170, maxLength: 7 });
  const [words, setWords] = useState(text.join(' '));
  const [renderWords, setRenderWords] = useState('');

  const handleTextChange = (e) => {
    for (let i = 0; i < e.target.value.length; i++) {
      if (e.target.value[i] == words[i]) {
        setRenderWords(e.target.value);
      }
    }
  };

  return (
    <>
      <div className="typer-container">
        <textarea
          className="text-area"
          name="main"
          id=""
          maxLength={300}
          placeholder={words}
          onChange={handleTextChange}
          value={renderWords}
        ></textarea>
      </div>
    </>
  );
}

export default App;
