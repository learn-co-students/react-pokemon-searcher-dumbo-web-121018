import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    let pokemonList =  this.props.allPokemon.map(onePokemon => <PokemonCard key={onePokemon.id} onePokemon={onePokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonList}
      </Card.Group>
    )
  }
}

export default PokemonCollection
