import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Todo from './components/Todo';
import './components/Todo.css';

function App() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/README.md')
      .then(response => response.text())
      .then(text => setMarkdown(text))
      .catch(error => console.error('Error loading README:', error));
  }, []);

  return (
    <div>
      <Todo />
      <div className="markdown-container">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App; 