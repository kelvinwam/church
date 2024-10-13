import React, { useState, useEffect } from 'react';

function Sermons() {
  const [sermons, setSermons] = useState([]);

  useEffect(() => {
    // Fetch sermons from an API or database
    setSermons([
      { id: 1, title: "Sermon 1", content: "Content of Sermon 1" },
      { id: 2, title: "Sermon 2", content: "Content of Sermon 2" }
    ]);
  }, []);

  return (
    <div>
      <h1>Sermons</h1>
      {sermons.map(sermon => (
        <div key={sermon.id}>
          <h2>{sermon.title}</h2>
          <p>{sermon.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Sermons;
