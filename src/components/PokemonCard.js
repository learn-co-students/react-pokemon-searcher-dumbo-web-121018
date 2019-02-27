import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false
  }

  toggleSprite = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const {name, sprites, stats} = this.props.pokemon
    return (
      <Card>
        <div  onClick={this.toggleSprite}>
          <div className="image">
            <img alt="oh no!" src={this.state.clicked ? sprites.back : sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats.find(stat => stat.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
