import React from 'react';

function App() {
  const textStyle = {
    textAlign: 'center',
    fontSize: '24px'
  };

  return (
    <div className="App">
      <header className="App-header">
        <p style={textStyle}>
          Test website for CS1660
        </p>
        <p style={textStyle}>
          Sorry for no aesthetics, I'm not a great frontend web developer, yet
        </p>
      </header>
    </div>
  );
}

export default App;