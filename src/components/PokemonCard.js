import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  clickHandler = () =>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    // console.log(this.props.onePokemon)
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" onClick={this.clickHandler} src={this.state.clicked ? this.props.onePokemon.sprites.back : this.props.onePokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.onePokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.onePokemon.stats.find(element => element.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
