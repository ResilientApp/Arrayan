import React, { useEffect, useState } from 'react';

export default function Privacy() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/privacy/index.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Privacy Policy</h1>
      <article style={{ whiteSpace: 'pre-wrap' }}>
        {content}
      </article>
    </div>
  );
}