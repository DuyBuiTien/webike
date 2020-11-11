import axios from 'axios';

const instance = axios.create();

export const GLOBAL_URL = 'http://localhost:4000';

export const requestGET = async (URL) => {
  return await instance({
    method: 'GET',
    url: URL,
    timeout: 15000,
    headers: { 'Access-Control-Allow-Origin': '*' }
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return { data: [] }
    })
}
export const requestPOST = async (URL, data) => {
  return await axios({
    method: 'POST',
    url: URL,
    data: data,
    timeout: 15000,
    headers: { 'Access-Control-Allow-Origin': '*' }
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
      return { data: [] }
    })
}
export const requestDELETE = async (URL, data) => {
  return await axios({
    method: 'DELETE',
    url: URL,
    data: data,
    timeout: 15000,
    headers: { 'Access-Control-Allow-Origin': '*' }
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return {data: []};
    });
};

