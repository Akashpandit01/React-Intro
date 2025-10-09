import React, { useEffect, useState } from 'react';

function QueryBasedPagination() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // Fetch all posts
  async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await response.json();
    setPosts(result);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  // Pagination calculations
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Todos (Page {currentPage})</h2>

      {/* Display current posts */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {currentPosts.map((post) => (
          <li 
            key={post.id} 
            style={{ 
              margin: '6px 0', 
              borderBottom: '1px solid #ccc', 
              padding: '4px 0' 
            }}
          >
            <strong>{post.id}.</strong> {post.title}
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div style={{ marginTop: '15px' }}>
        <button 
          onClick={() => setCurrentPage(prev => prev - 1)} 
          disabled={currentPage === 1}
          style={{ marginRight: '10px', padding: '5px 10px', cursor: 'pointer' }}
        >
          Prev
        </button>

        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            style={{
              margin: '0 5px',
              padding: '5px 10px',
              cursor: 'pointer',
              backgroundColor: num === currentPage ? '#007bff' : 'white',
              color: num === currentPage ? 'white' : 'black',
              border: '1px solid #007bff',
              borderRadius: '5px'
            }}
          >
            {num}
          </button>
        ))}

        <button 
          onClick={() => setCurrentPage(prev => prev + 1)} 
          disabled={currentPage === totalPages}
          style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default QueryBasedPagination;
