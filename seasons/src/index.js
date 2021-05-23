import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

    console.log(this.state.lat);

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position ', position);
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return <SeasonDisplay lat={this.state.lat} err={this.state.errorMessage} />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
