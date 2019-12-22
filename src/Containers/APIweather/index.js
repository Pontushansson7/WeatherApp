import React, { Component } from 'react';
import '../../App.css';
import '../../Form.css';
import axios from 'axios';
class ApiWeather extends Component {
//01726c5215c52cf384c18c22464476e8

  state = {
    lat: '',
    long: '',
    nameOfCity: '',
    country: '',
    weather: '',
    temperature:'',
    humidity: '',

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }
  
  submitApi = () => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?lat=' + this.state.lat + '&lon=' + this.state.long + '&APPID=01726c5215c52cf384c18c22464476e8')
  .then((response) => {
    this.setState({
      nameOfCity: response.data.name,
      country: response.data.sys.country,
      weather: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    })
    console.log(response);
  })
  .catch((error) => {
    if(error.response.status === 400) {
     this.setState({nameOfCity: 'Kan inte hitta staden!',
    country: '',
    weather: '',
    temperature: '',
    humidity: '',

    })
    } else {
      this.setState({nameOfCity: 'Hittar inte staden!',
      country: '',
      weather: '',
      temperature: '',
      humidity: '',
    })
    }
  });
  }
    render() {
      return (
        <div className="form-style-6">
          <h4>Mata in Latitude och Longitude för att hitta väder på önskad plats</h4>
          <input type="number" name="lat" placeholder="Latitude" value={this.state.lat} onChange={this.handleChange} />
          <input type="number" name="long" placeholder="Longitude" value={this.state.long} onChange={this.handleChange} />
          <input type="submit" onClick={this.submitApi} value="Hämta meddelande" />
          <p className="placering">{this.state.error}</p>
          <p className="placering">Stad: <span>{this.state.nameOfCity}</span></p>
          <p className="placering">Land: <span>{this.state.country}</span></p>
          <p className="placering">Väder: <span>{this.state.weather}</span></p>
          <p className="placering">Temperatur: <span>{this.state.temperature}</span></p>
          <p className="placering">Luftfuktighet: <span>{this.state.humidity}</span></p>
        </div>
      );
    }
  }

  export default ApiWeather;