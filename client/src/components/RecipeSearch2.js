import React, { Component } from 'react';
import axios from 'axios';
// import Suggestions from './suggestions'


class RecipeSearch2 extends Component {
state = {
query: '',
results: []
}

getInfo = () => {
axios.get(`http://localhost:5000/search/${this.state.query}`)
    .then(({ response }) => {
        console.log(response)
    this.setState({
        results: response.data.recipeData.data
    })
    })
}

handleInputChange = () => {
this.setState({
    query: this.search.value
}, () => {
    if (this.state.query && this.state.query.length > 1) {
    if (this.state.query.length % 2 === 0) {
        this.getInfo()
    }
    } else if (!this.state.query) {
    }
})
}

render() {
    console.log(this.state.results)
return (
    <form>
    <input
        placeholder="Search for..."
        ref={input => this.search = input}
        onChange={this.handleInputChange}
    />
   {this.state.results.map(r => (
    <>
    <li key={r.id}>
    {r.name}
    </li>
    </>
    ))}
    </form>
)
}
}

export default RecipeSearch2