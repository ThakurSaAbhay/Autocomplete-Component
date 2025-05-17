import { useState, useEffect, useRef } from 'react';
import type { SearchResponse } from '../types';

export function useSearch(query: string, skip: number = 0) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<SearchResponse | null>(null);
  const prevQueryRef = useRef({ query, skip });

  
  useEffect(() => {
    if (prevQueryRef.current.query === query && 
        prevQueryRef.current.skip === skip) {
      return;
    }
    
    prevQueryRef.current = { query, skip };
    
    const fetchData = async () => {
      if (query.length < 2) {
        setData(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${query}&limit=10&skip=${skip}`
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, skip]);

  return { data, loading, error };
}