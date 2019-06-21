import React,{Component} from 'react';
import RestaurantCard from '../components/restaurantcard'

export default class Restaurants extends Component{
  constructor() {
  super()
  this.state = {
    search: '',
    restaurants: [{
camis: "40364956",
dba: "THE NEW STARLING ATHLETIC CLUB OF THE BRONX",
boro: "BRONX",
building: "2222",
street: "HAVILAND AVENUE",
zipcode: "10462",
phone: "7188229004",
cuisine_description: "American",
inspection_date: "2018-06-14T00:00:00.000",
action: "Violations were cited in the following area(s).",
violation_code: "08A",
violation_description: "Facility not vermin proof. Harborage or conditions conducive to attracting vermin to the premises and/or allowing vermin to exist.",
critical_flag: "Not Critical",
score: "12",
grade: "A",
grade_date: "2018-06-14T00:00:00.000",
record_date: "2019-06-20T06:00:57.000",
inspection_type: "Cycle Inspection / Initial Inspection"
}],
  };
}
  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/43nn-pn8j.json')
      .then(response => response.json())
      .then(x => this.setState({restaurants: x}))
  }

  updateSearch(event){
    this.setState({search: event.target.value})
  }

  render(){
    let filtered = this.state.restaurants.filter( (restaurant) => {
        return restaurant.dba.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    return(
      <div>
        <input type="text"
               value={this.state.search}
               onChange={this.updateSearch.bind(this)}
        >
        </input>
        <h1>Restaurants</h1>
        <h2>{filtered.map(restaurant =>
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
