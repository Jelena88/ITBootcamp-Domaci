

import React from 'react'
import people from '../components/data';

import AddPerson from '../components/addperson';

class Content extends React.Component {
    constructor() {
      super();
      this.state = {
        people: people
      }
    }
  
    addPerson(person) {
      let people = this.state.people;
  
      people.push(person);
  
      this.setState({
        people: people
      })
    }
  
    render() {
      return (
        <div>
          <h1>Address Book</h1>
        
          <AddPerson people={this.state.people} addPerson={this.addPerson.bind(this)} />
        </div>
      )
    }
  }

  export default Content