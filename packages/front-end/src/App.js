import React from 'react';
import SwitchPages from 'pages/SwitchPages';
import Nav from 'components/Nav/Nav';
import Auth from 'containers/Auth/Auth';

class App extends React.Component {
  render() {
    return (
      <Auth>
        <div className="App">
          <Nav />
          <SwitchPages />
        </div>
      </Auth>
    );
  }
}

export default App;
