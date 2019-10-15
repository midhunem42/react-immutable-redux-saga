import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Test from './test';

function App() {
  return (
    <div className="App">

      <ErrorBoundary>
        <Test />
      </ErrorBoundary>
    </div>
  );
}

export default App;
