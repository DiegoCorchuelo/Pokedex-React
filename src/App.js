import React, {Component} from 'react';
import './App.css';
import {PokeList, DetailView, Pokemon} from './components'

class App extends Component {
  constructor () {
    super()
    this.state = {
      pokemon: {
        id: 1,
        name:'bulbasaur',
        type: 'grass',
        weight: 69,
        height: 7,
        sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      }
    }

    this.handleOnclick = this.handleOnclick.bind(this)
  }

  handleOnclick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then (data => {
      const pokemon = new Pokemon(data)
      this.setState({pokemon})
    })
    .catch(err => console.log(err))

  }

  render() {
    return (

      <div>
        <div className='Title'> 
          <h1>Pokedex</h1>
        </div>
        <div className='App'>
          <PokeList handleOnclick={this.handleOnclick}/>
          <DetailView pokemon ={this.state.pokemon}/>
        </div>
      </div>
      

    )
  }
}



export default App;
