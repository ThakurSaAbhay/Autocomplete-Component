import React, { useState } from 'react';
import { useDebounce } from './hooks/useDebounce';
import { useSearch } from './hooks/useSearch';
import { SearchResults } from './components/SearchResults';
import './App.css';

const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [skip, setSkip] = useState(0);
  const debouncedQuery = useDebounce(query, 2000);
  const { data, loading, error } = useSearch(debouncedQuery, skip);

  const handleNextPage = () => {
    if (data && skip + 10 < data.total) {
      setSkip(skip + 10);
    }
  };

  const handlePrevPage = () => {
    if (skip >= 10) {
      setSkip(skip - 10);
    }
  };

  return (
    <div className="app">
      <h1>Product Search</h1>
      <p>Search for products from API</p>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="search-input"
      />
      
      <SearchResults
        products={data?.products || []}
        loading={loading}
        error={error}
      />

      {data && data.products.length > 0 && (
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={skip === 0}>
            Previous
          </button>
          <span className="page-info">
            Page {Math.floor(skip / 10) + 1} of{' '}
            {Math.ceil(data.total / 10)}
          </span>
          <button
            onClick={handleNextPage}
            disabled={skip + 10 >= data.total}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};


export default App