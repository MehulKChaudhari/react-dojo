import React, { useState } from 'react';

const Windowing = () => {
  const [scrollTop, setScrollTop] = useState(0);
  
  const totalItems = 1000;
  const itemHeight = 50;
  const containerHeight = 350;
  
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    totalItems
  );
  
  const visibleItems = [];
  for (let i = startIndex; i < endIndex; i++) {
    visibleItems.push(i);
  }

  const handleScroll = (e) => {
    setScrollTop(e.target.scrollTop);
  };

  return (
    <div style={{ justifySelf: 'center' }}>
      <h2>Windowing</h2>
      <p>This example demonstrates how to optimize large lists using windowing for better performance.</p>
      <p>Windowing renders only the visible items in a large list, significantly improving performance and user experience.</p>
      
      <p style={{ 
        padding: '0.5rem', 
        backgroundColor: '#f1f3f4', 
        borderLeft: '3px solid #0366d6',
        margin: '1rem 0',
        fontSize: '15px',
        color: '#5f6368',
        width: '600px',
        fontStyle: 'italic'
      }}>
        This shows a list of {totalItems} items but only renders the ones you can see.
      </p>
      
      <div 
        style={{
          height: containerHeight,
          width: 600,
          border: '2px solid #ccc',
          overflow: 'auto'
        }}
        onScroll={handleScroll}
      >
        <div 
          style={{
            paddingTop: startIndex * itemHeight,
            paddingBottom: (totalItems - endIndex) * itemHeight
          }}
        >
          {visibleItems.map((index) => (
            <div
              key={index}
              style={{
                height: itemHeight,
                padding: '10px',
                border: '1px solid #eee',
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Item {index + 1}
            </div>
          ))}
        </div>
      </div>
      
      <p style={{ marginTop: '1rem', fontSize: '14px', color: '#666' }}>
        Currently rendering items {startIndex + 1} to {endIndex}. 
        Total items: {totalItems}. Only {visibleItems.length} items in DOM.
        <br />
        Using padding: {startIndex * itemHeight}px top, {(totalItems - endIndex) * itemHeight}px bottom to create scroll space.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h3>Why Use Windowing?</h3>
        <p>
          Without windowing, your browser would create {totalItems} DOM elements all at once. 
          That means {totalItems} divs sitting in memory, even though you can only see about 7 of them. 
          Your browser has to track all those elements, update their styles, and handle events for each one. 
          The result? Slow scrolling, laggy interactions, and sometimes the page just freezes up.
        </p>
        
        <h3>Benefits</h3>
        <ul>
          <li><strong>Better Performance</strong> - Only renders visible items, reducing DOM nodes</li>
          <li><strong>Less Memory Usage</strong> - Dramatically reduces memory consumption</li>
          <li><strong>Faster Scrolling</strong> - Smooth scrolling even with thousands of items</li>
          <li><strong>Responsive UI</strong> - Keeps the interface fast and responsive</li>
        </ul>
      </div>
    </div>
  );
};

export default Windowing; 