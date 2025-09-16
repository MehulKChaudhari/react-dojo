# JS Dojo

A curated collection of React patterns, techniques, and best practices. Each example is self-contained and demonstrates a specific concept you can use in your projects.

## Overview

JS Dojo is a learning resource with practical, runnable examples. Each example focuses on a specific React concept or pattern, making it easy to understand and implement in your own projects.

## Examples

### Windowing
- **Path**: `/windowing`
- **Description**: Learn how to optimize large lists using windowing for better performance
- **Status**: Ready for implementation

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Structure

```
js-dojo/
├── src/
│   ├── examples/        # Individual example folders
│   │   └── windowing/   # Windowing
│   │       ├── index.jsx # Main component
│   │       └── README.md # Example documentation
│   ├── components/      # Shared components
│   ├── App.tsx         # Main app with routing
│   └── types/          # TypeScript declarations
└── README.md           # This file
```

## Adding New Examples

To add a new example:

1. Create a new folder in `src/examples/` with a descriptive name
2. Add an `index.jsx` file with your main component
3. Add a `README.md` file explaining the example
4. Add any additional helper files as needed within the example folder
5. Update the examples list in `src/components/ExampleList.tsx`
6. Add the route in `src/App.tsx`

## Design Principles

- **Self-contained**: Each example is completely independent
- **Short and focused**: Examples demonstrate one concept at a time
- **No shared components**: Examples include their own components if needed
- **Minimal styling**: Clean, simple design focused on content
- **Clear navigation**: Each example has its own back button

## Technologies Used

- **React 19** - Latest React with hooks and modern patterns
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **Minimal Styling** - Clean, simple design focused on content

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

This project is open source and available under the [MIT License](LICENSE).
