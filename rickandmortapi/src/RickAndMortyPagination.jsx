import React, { useEffect, useState, useRef } from "react";

function RickAndMortyPagination() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPerPage = 10;
  const totalPagesRef = useRef(0);
  const pageRef = useRef(currentPage);

  // Fetch data using useEffect
  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results);
        totalPagesRef.current = Math.ceil(data.results.length / totalPerPage);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    }

    fetchCharacters();
  }, []);

  // Update pageRef whenever currentPage changes
  useEffect(() => {
    pageRef.current = currentPage;
  }, [currentPage]);

  const indexOfLast = currentPage * totalPerPage;
  const indexOfFirst = indexOfLast - totalPerPage;
  const currentCharacters = characters.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Rick and Morty Characters</h1>
      <p>Current Page (via useRef): {pageRef.current}</p>

      {/* Character Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {currentCharacters.map((char) => (
          <div
            key={char.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              background: "#f9f9f9",
            }}
          >
            <img
              src={char.image}
              alt={char.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <p><strong>{char.name}</strong></p>
          </div>
        ))}
      </div>

      
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: totalPagesRef.current }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              margin: "5px",
              padding: "8px 12px",
              borderRadius: "5px",
              border: "1px solid #007bff",
              backgroundColor: currentPage === page ? "#007bff" : "white",
              color: currentPage === page ? "white" : "black",
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RickAndMortyPagination;
