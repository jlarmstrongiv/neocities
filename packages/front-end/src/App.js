import React from 'react';
import BeforeUnload from 'containers/BeforeUnload/BeforeUnload';
import SwitchPages from 'pages/SwitchPages';
import Nav from 'components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BeforeUnload />
        <Nav />
        <SwitchPages />
      </div>
    );
  }
}

export default App;
