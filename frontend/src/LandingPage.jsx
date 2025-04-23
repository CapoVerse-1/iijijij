import React, { useState } from 'react';
import './LandingPage.css';

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Searching for:', searchTerm);

    // --- Placeholder Logic --- 
    const placeholderResults = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      title: `Generated Video ${i + 1} for "${searchTerm}"`, 
      thumbnail: `https://via.placeholder.com/320x180.png/111111/eeeeee&text=Placeholder+${i+1}` // Placeholder image URL
    }));
    setResults(placeholderResults);
    // --- End Placeholder Logic ---

    // TODO: Replace placeholder logic with actual API call to generate videos
  };

  return (
    <div className="landing-page">
      <header className="header">
        <h1>AI Gen Porn</h1> {/* Or your preferred site title */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Describe the video you want to generate..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Generate</button>
        </form>
      </header>

      <main className="results-grid">
        {results.length === 0 && (
          <p className="no-results">Enter a description above to generate videos.</p>
        )}
        {results.map((result) => (
          <div key={result.id} className="result-item">
            <img src={result.thumbnail} alt={result.title} />
            <h3>{result.title}</h3>
            {/* Add more details like duration, tags, etc. if needed */}
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Site Name. All rights reserved.</p>
        {/* Add other footer links if necessary */}
      </footer>
    </div>
  );
}

export default LandingPage; 