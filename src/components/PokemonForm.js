import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  formChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = event => {
    event.preventDefault()
    event.target.reset()
    const {name, hp, frontUrl, backUrl} = this.state
    const newPokemon = {
      name: name,
      stats: [
        {
          value: hp,
          name: "hp"
        }
      ],
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }
    this.runPostFetch(newPokemon)
  }

  runPostFetch = newPokemon => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      body: JSON.stringify(newPokemon),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(res => res.json())
      .then(pokemon => {
        this.setState({
          name: '',
          hp: '',
          frontUrl: '',
          backUrl: ''
        }, () => this.props.addNewPokemon(pokemon))
      })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.formChangeHandler} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.formChangeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.formChangeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.formChangeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
