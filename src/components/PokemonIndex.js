import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    originalPokemon: [],
    filteredPokemon: [],
    value: ""
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => {
      this.setState({
        originalPokemon: data,
        filteredPokemon: [...data]
      })
    })
  }

  changeHandlerForSearch = (event, data) => {
    const newPokemon = [...this.state.originalPokemon].filter(pokemon => pokemon.name.toLowerCase().includes(data.value.toLowerCase()))

    this.setState({
      filteredPokemon: newPokemon,
      value: data.value
    }, console.log("Match?", this.state.value))
  }

  addNewPokemon = pokemonObj => {
    this.setState({
      originalPokemon: [...this.state.originalPokemon, pokemonObj],
      filteredPokemon: [...this.state.filteredPokemon, pokemonObj]
    })
  }

  render() {
    console.log("original Pokemons", this.state.originalPokemon);
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.changeHandlerForSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemon} />
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
