import React, { useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState(""); // For user input
  const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounced input
  const [videos, setVideos] = useState([]); // For fetched video data

  // Fetch data function
  const fetchdata = async (title) => {
    try {
      const response = await fetch(
        title
          ? `https://content-xflix-backend.azurewebsites.net/v1/videos/${title}`
          : `https://content-xflix-backend.azurewebsites.net/v1/videos/`
      );
      const res = await response.json();
      setVideos(res.videos || []); // Update videos state
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // Debounce the input query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query); // Update debounced query after delay
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on input change
  }, [query]);

  // Fetch data when debouncedQuery changes
  useEffect(() => {
    fetchdata(debouncedQuery);
  }, [debouncedQuery]);

  // Handle input change
  const handlechange = (e) => {
    setQuery(e.target.value); // Update input query
  };

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        placeholder="Search videos..."
        onChange={handlechange}
        value={query}
      />
      <div>
        {videos.map((video) => (
          <p key={video._id}>{video.title}</p> // Render video titles
        ))}
      </div>
    </div>
  );
}

export default App;
