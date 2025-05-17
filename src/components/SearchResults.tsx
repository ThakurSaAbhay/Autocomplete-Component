import React from 'react';
import type { Product } from '../types';
import { LoadingSpinner } from './LoadingSpinner';

interface Props {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const SearchResults: React.FC<Props> = ({ products, loading, error }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="search-results error">{error}</div>;
  if (!products.length) return <div className="search-results success" style={{fontSize:14,color:"#959595"}}>No items to show</div>;

  return (
    <div className="search-results">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <span>${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};