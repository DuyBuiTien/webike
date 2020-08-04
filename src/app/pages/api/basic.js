import axios from 'axios'

const instance = axios.create();

export const requestGET = async(URL) => {
    return await instance({
        method: 'GET',
        url: URL,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}


export const requestPOST = async(URL, data) => {
    return await instance({
        method: 'POST',
        url: URL,
        data: data,
        timeout: 15000,
    })
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error); 
        return {data: []}
    })
}