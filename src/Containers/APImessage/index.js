import React, { Component } from 'react';
import '../../App.css';
import '../../Form.css';
import axios from 'axios';

class ApiMessages extends Component {

  state = {
    id: '',
    inData: [],
    error: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }
  
  submitApi = () => {
    axios.get('http://193.10.202.82/MessageRestApi/Message/' + this.state.id)
  .then((response) => {
    this.setState({inData: response.data, error: ''});
  })
  .catch((error) => {
    this.setState({error: 'De fanns inget meddelande med det id:/',
    inData: '',
  })
    console.log(error)
  });
  }
    render() {
      console.log(this.state.inData);
      return (
        <div className="form-style-6">
          <h4>Hämta meddelande via ID</h4>
          <input type="number" name="id" placeholder="Skriv ID" value={this.state.id} onChange={this.handleChange} />
          <input type="submit" onClick={this.submitApi} value="Hämta info från via id" />
          <p className="placering">{this.state.error}</p>
          <p className="placering">Id: <span>{this.state.inData.Id}</span></p>
          <p className="placering">Avsändare: <span>{this.state.inData.SendingUserId}</span></p>
          <p className="placering">Mottagare: <span>{this.state.inData.RecievingUserId}</span></p>
          <p className="placering">Meddelande: <span>{this.state.inData.Message1}</span></p>
          <p className="placering">Servicetitel: <span>{this.state.inData.ServiceTitle}</span></p>
          <p className="placering">Tid: <span>{this.state.inData.Time}</span></p>
        </div>
      );
    }
  }

export default ApiMessages;