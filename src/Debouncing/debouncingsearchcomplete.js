import React, { useState, useEffect } from "react";

export function Debouncesearch() {
  const [query, setQuery] = useState(""); // For user input
  const [debouncedQuery, setDebouncedQuery] = useState(""); // For debounced input
  const [videos, setVideos] = useState([]); // For fetched video data

  // Fetch data function
  const fetchdata = async (query) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const res = await response.json();
      console.log(res.results);
      setVideos(res.results);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handlechange = (e) => {
    setQuery(e.target.value); // Update input query
  };
  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [query]);
  useEffect(() => {
    fetchdata(debouncedQuery);
  }, [debouncedQuery]);

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
        {videos.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}
