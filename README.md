# Product Search Application

A React application that allows users to autocomplete search for products using the DummyJSON API.

## Features

- **Search Functionality**: Search products with debounced input (2-second delay)
- **Pagination**: Navigate through search results with previous/next buttons
- **Error Handling**: Proper error display if API requests fail

## Technology Stack

- [React](https://react.dev/) (v19.1.0)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) - Fast build tool and development server

## Setup Instructions

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd clinikally_assignment/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Thought Process / Approach

### Design Decisions

1. **Debounced Search**:
   - Implemented a custom debounce hook to prevent excessive API calls while typing
   - Set a 2-second delay to balance responsiveness and API efficiency

2. **UI/UX Considerations**:
   - Used a clean, minimalist design with consistent spacing and typography
   - Implemented hover effects on product items to enhance interactivity
   - Added elevation effects (shadow and transform) for a modern, tactile feel

3. **State Management**:
   - Used React hooks for local state management
   - Created custom hooks to encapsulate search logic and API interactions

4. **Error Handling**:
   - Implemented clear error messages with visual cues
   - Added loading states to provide feedback during API calls
   - 
## Project Structure

```
src/
├── assets/        # Static assets like images
├── components/    # React components
│   ├── LoadingSpinner.tsx
│   └── SearchResults.tsx
├── hooks/         # Custom React hooks
│   ├── useDebounce.tsx
│   └── useSearch.tsx
├── App.css        # Main application styles
├── App.tsx        # Main application component
├── index.css      # Global styles
├── main.tsx       # Application entry point
└── types.tsx      # TypeScript type definitions
```

## API Integration

The application connects to the [DummyJSON](https://dummyjson.com/) API to search for products.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Future Improvements

- Add filtering options by price, category, etc.
- Implement sorting functionality
- Add favorites/wishlist functionality
- Integrate with a state management library for larger scale applications
- Add unit and integration tests

## License

This project is licensed under the MIT License.