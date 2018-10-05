import React from 'react';
import Pages from 'pages/Pages';
import Nav from 'components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Pages />
      </div>
    );
  }
}

export default App;
