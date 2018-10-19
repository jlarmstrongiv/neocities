import React from 'react';
import BeforeUnload from 'containers/BeforeUnload/BeforeUnload';
import SwitchPages from 'pages/SwitchPages';
import Nav from 'components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <BeforeUnload />
        <div className = "sidebar">
          <Nav />
        </div>
        <div className = "page">
          <SwitchPages />
        </div>
      </div>
    );
  }
}

export default App;
