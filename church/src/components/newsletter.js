import React, { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email to backend for subscription
    axios.post('/api/subscribe', { email })
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Subscribe to Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
