import axios from 'axios';

const getRecipeItem = () => {
console.log('get recipe called')
console.log(this.state.query)

axios.get(`http://localhost:5000/recipe/search/${this.state.query}`)
.then((response)=> {
    const data= response.data;
    console.log(data)
    this.setState({ results: data});
    this.handleOpenModal();
    
    console.log('Recipe received')
    
    })
    .catch(() => {
    console.log('Error retrieving recipe')
    });
}


const getPantryItem = () => {
axios.get(`http://localhost:5000/pantry`)
.then((response)=> {
    const data= response.data.pantryData;
    this.setState({ pantry: data});
    console.log('Pantry received')
})
.catch(() => {
    console.log('Error retrieving pantry')
});
}

// resetUserInputs = () => {
// this.setState({
//     name: '',
// });
// };

const postPantry = () => {
    const payload = [];
axios({ 
    url: `http://localhost:5000/pantry`,
    method: 'POST',
    data: payload
})
.then(()=> {
    console.log('Data sent');
    this.resetUserInputs();
    this.getPantryItem();
})
.catch(()=> {
    console.log('Data not sent');
});
};

export default {
    postPantry,
    getPantryItem,
    getRecipeItem
}
