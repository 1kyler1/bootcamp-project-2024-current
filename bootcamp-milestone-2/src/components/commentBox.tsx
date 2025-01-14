"use client"; //client component

import { useState } from "react";

export default function CommentBox({
  slug,
  route,
}: {
  slug: string;
  route: string;
}) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
    // check inputs
    if (!user || !comment) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      // POST to api endpoint
      let path = "";
      if (route === "blog") {
        path = `/api/blog/${slug}/comments/`;
      } else {
        path = `/api/project/${slug}/comments/`;
      }

      const response = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          comment,
          time: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // reset input boxes, reload page
        setMessage("Comment added successfully!");
        setUser("");
        setComment("");
        window.location.reload();
      } else {
        const errorText = await response.text();
        setMessage(`Error: ${errorText}`);
      }
    } catch {
      setMessage("An unexpected error occurred.");
    }
  };

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "1rem auto",
      }}
    >
      <h3>Leave a Comment</h3>
      <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          marginBottom: "0.5rem",
          padding: "0.5rem",
        }}
      />
      <textarea
        placeholder="Your comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        style={{
          display: "block",
          width: "100%",
          marginBottom: "0.5rem",
          padding: "0.5rem",
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "rgb(216, 97, 37)",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Submit Comment
      </button>
      {message && (
        <p
          style={{
            marginTop: "1rem",
            color: message.includes("Error") ? "red" : "green",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}