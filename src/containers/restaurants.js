import React,{Component} from 'react';

export default class Restaurants extends Component{
  constructor() {
  super()
  this.state = {
    restaurants: ["empty"],
  };
}
  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
      .then(response => response.json())
      .then(x => this.setState({restaurants: x}))
  }

  render(){
    debugger
    return(
      <div>
        <h1>Restaurants</h1>
        <h2>{this.state.restaurants[0].dba}</h2>
      </div>
    )
  }

}
