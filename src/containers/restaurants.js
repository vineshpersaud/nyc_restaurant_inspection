import React,{Component} from 'react';
import RestaurantCard from '../components/restaurantcard'

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
        <h2>{this.state.restaurants.map(restaurant =>
          <div>
            <RestaurantCard
              restaurant={restaurant}
            />
          </div>
        )}</h2>
      </div>
    )
  }

}
