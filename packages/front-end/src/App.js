import React from 'react';
import SwitchPages from 'pages/SwitchPages';
import Nav from 'components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SwitchPages />
      </div>
    );
  }
}

export default App;
