{
  /* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */
}
import React, { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    return <h1>Loading...</h1>;
  }, []);
  return (
    <div>
      <main className="app">
        <textarea
          onChange={(e) => setInput(e.target.value)}
          className="textarea"
          placeholder="Text Area"
        />
        <section className="preview">
          <p>{input}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
