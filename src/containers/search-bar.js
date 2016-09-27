import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value});
  }
  
  onFormSubmit(event) {
    event.preventDefault();
    // call to the api using this.state.term
    // http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID={APIKEY} 46f1649fd46f852077f6c69fbdc503f2
  }
  
  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="form-group">
        <input 
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} 
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
   }
}