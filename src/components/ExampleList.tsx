import { Link } from 'react-router-dom';

interface Example {
  id: string;
  title: string;
  description: string;
  path: string;
}

const examples: Example[] = [
  {
    id: 'windowing',
    title: 'Windowing',
    description: 'Learn how to optimize large lists using windowing for better performance',
    path: '/windowing'
  }
];

const ExampleList = () => {
  return (
    <div>
      <h1>React Dojo</h1>
      <p>A curated collection of React patterns, techniques, and best practices. Each example is self-contained and demonstrates a specific concept you can use in your projects.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Available Examples</h2>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          {examples.map((example) => (
            <div key={example.id} style={{ 
              border: '1px solid #ccc', 
              padding: '1rem', 
              borderRadius: '4px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>
                <Link to={example.path} style={{ color: '#0366d6', textDecoration: 'none' }}>
                  {example.title}
                </Link>
              </h3>
              <p style={{ margin: 0, color: '#666' }}>{example.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExampleList; 