import React, {Component} from 'react';
import './App.css';
import { key } from '../config';
import Header from '../components/Header/Header';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: 'Parker',
      weather: [],
    }
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${
      this.state.search
    }&appid=${key}&units=imperial`)
        .then(response=> response.json())
        .then(data => this.setState({weather: {
          icon: data.weather[0].icon,
          description: data.weather[0].description.toUpperCase(),
          temp: `${Math.round(data.main.temp)}°`
        }
        }));
    
}

  onSearchSubmit (event) {
    this.setState({search: event.target.value});
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Search 
          searchSubmit={this.onSearchSubmit} />
        <Card 
          city={this.state.search}
          weather={this.state.weather.description}
          temp={this.state.weather.temp}
          icon={this.state.weather.icon}/>
        <Footer />
      </div>
    );
  }
}

export default App;
