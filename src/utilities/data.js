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
                let errMessage = (error.response) ? `${error.response.statusText} : ${error.response.data.message}` : `${error.response.statusText} : ${error.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            })
    },
    getOneRecipe : (id) => {
        return axios.get(`${API_ENDPOINT}/api/recipe/${id}`)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                let errMessage = (error.response) ? `${error.response.statusText} : ${error.response.data.message}` : `${error.response.statusText} : ${error.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            })
    },
    sendRecipe: function (recipeObj) {
        return axios.post(`${API_ENDPOINT}/api/recipes`, recipeObj)
            .then(response => response)
            .catch(function (error) {
                let errMessage = (error.response) ? `${error.response.statusText} : ${error.response.data.message}` : `${error.response.statusText} : ${error.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            });
    },
    removeRecipe : (id) => {
        return axios.delete(`${API_ENDPOINT}/api/recipe/${id}`)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                let errMessage = (error.response) ? `${error.response.statusText} : ${error.response.data.message}` : `${error.response.statusText} : ${error.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            })
    },
    updateRecipe : (recipeObj) => {
        return axios.put(`${API_ENDPOINT}/api/recipe/${recipeObj.id}`,recipeObj)
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                let errMessage = (error.response) ? `${error.response.statusText} : ${error.response.data.message}` : `${error.response.statusText} : ${error.response.data.message}`;
                return Promise.reject(new Error(errMessage));
            })
    }
}