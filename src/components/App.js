import React, { useState, useEffect } from "react";
import marked from "marked";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setIsLoading(true);
      // Simulate fetching markdown content from an API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const markdownContent = `# Markdown Example

This is a **markdown** example.

- List item 1
- List item 2

\`\`\`javascript
console.log('Hello, Markdown!');
\`\`\`
      `;
      setMarkdown(markdownContent);
      setIsLoading(false);
    };

    fetchMarkdown();
  }, []);

  return (
    <div className="app">
      <div className="editor">
        <h2>Markdown Editor</h2>
        <textarea
          className="textarea"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
      <div className="preview">
        <h2>Markdown Preview</h2>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
        )}
      </div>
    </div>
  );
};

export default App;
