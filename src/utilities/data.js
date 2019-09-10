const axios = require('axios');
const API_ENDPOINT = 'http://localhost:9000';

export default{
    init : () => {

    },
    getAllRecipes : () => {
        return axios.get(`${API_ENDPOINT}/api/recipes`)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            })
    },
    getOneRecipe : (id) => {
        return axios.get(`${API_ENDPOINT}/api/recipe/${id}`)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error;
            })
    }
}