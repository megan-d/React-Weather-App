import React, {Component} from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
