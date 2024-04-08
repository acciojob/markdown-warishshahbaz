import React, { useEffect, useState } from "react";
import "../styles/App.css";

function App() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate the loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div>
      <main className="app">
        <textarea
          onChange={(e) => setInput(e.target.value)}
          className="textarea"
          placeholder="Text Area"
        />
        <section className="preview">
          <h1 id="Heading">{input}</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
