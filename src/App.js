import React, { useState } from "react";
import { marked } from "marked";

const defaultMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading
[Check out FreeCodeCamp](https://www.freecodecamp.org)

Inline code: \`console.log("Hello, world!")\`

\`\`\`
// This is a code block
function greet(name) {
  return "Hello, " + name;
}
\`\`\`

- List Item One
- List Item Two

> This is a blockquote!

**This text is bold**

![FCC Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  breaks: true,
});

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <div className="editor-preview-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleChange}
          className="editor"
        />
        <div
          id="preview"
          className="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
};

export default App;
