{
  /* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */
}
import React, { useState } from "react";
import "../styles/App.css";

function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <main className="app">
        <textarea
          onChange={(e) => setInput(e.target.value)}
          className="textarea"
          placeholder="Text Area"
        />
        <section className="preview">
          <h1>{input}</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
