const url = 'http://localhost:3002/api/';

export const ApiService = {
    get(endPoint = ''){
        return fetch(url + endPoint)
            .then(response => response.json());
    }
}