import React, { useState } from 'react';

function Admin() {
  const [sermonTitle, setSermonTitle] = useState("");
  const [sermonContent, setSermonContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post the new sermon (to an API or database)
    console.log({ title: sermonTitle, content: sermonContent });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={sermonTitle}
          onChange={(e) => setSermonTitle(e.target.value)}
          placeholder="Sermon Title"
        />
        <textarea
          value={sermonContent}
          onChange={(e) => setSermonContent(e.target.value)}
          placeholder="Sermon Content"
        />
        <button type="submit">Post Sermon</button>
      </form>
    </div>
  );
}

export default Admin;
