import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Please enter your name";
    }

    if (email.trim() === "") {
      newErrors.email = "Please enter your email";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (feedback.trim() === "") {
      newErrors.feedback = "Please enter your feedback";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Feedback submitted successfully!");
    } else {
      setSuccess("");
    }
  };

  return (
    <div>
      <h1>Student Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <br />

        <div>
          <label>Email:</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <br />

        <div>
          <label>Feedback:</label>
          <br />
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          {errors.feedback && <p>{errors.feedback}</p>}
        </div>

        <br />

        <button type="submit">Submit</button>

        {success && <p>{success}</p>}
      </form>
    </div>
  );
}

export default App;