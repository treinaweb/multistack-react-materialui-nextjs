const baseUrl = "http://localhost:3002/api/"

export const ApiService = {
    get(endpoint = ''){
       return fetch(baseUrl + endpoint)
            .then(response => response.json())
    }
}