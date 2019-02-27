import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    allPokemon:[],
    searchPokemon:""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({
      allPokemon: data,
    }))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchPokemon: value })
    console.log(this.state.searchPokemon)
  }

  addPokemonObj = (pokemon) => {
    this.setState({
      allPokemon: [...this.state.allPokemon, pokemon]
    })
  }

  render() {
    let filteredPokemons = this.state.allPokemon.filter(onePokemon => onePokemon.name.includes(this.state.searchPokemon) )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={filteredPokemons}/>
        <br />
        <PokemonForm addPokemonObj={this.addPokemonObj}/>
      </div>
    )
  }
}

export default PokemonPage
