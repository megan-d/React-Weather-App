import React, {Component} from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbox: '',
      weather
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
