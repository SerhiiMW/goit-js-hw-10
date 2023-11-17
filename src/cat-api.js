import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_9NjgphPGH74YSYxqRUUuc0LqGKpWE0CiUvRBUaeqxH418ruNJH5hOcMAe8a5yNl7";

  function fetchBreeds() {
    const URL = `https://api.thecatapi.com/v1/breeds`;
    const API_KEY = "live_9NjgphPGH74YSYxqRUUuc0LqGKpWE0CiUvRBUaeqxH418ruNJH5hOcMAe8a5yNl7"

    const params = new URLSearchParams({
      api_key: API_KEY,
    });
  
    return fetch((`${URL}?${params}`),{headers: {
        'x-api-key': API_KEY
      }}).then((response) => {
      if (!response.ok) {
        throw new Error("404 not found!");
      }
      return response.json();
    });
  }

  function fetchCatByBreed(breedId) {
    const URL = `https://api.thecatapi.com/v1/images/search`;
    const API_KEY = "live_9NjgphPGH74YSYxqRUUuc0LqGKpWE0CiUvRBUaeqxH418ruNJH5hOcMAe8a5yNl7"
  
    const params = new URLSearchParams({
        breed_ids: breedId,
        api_key: API_KEY,
      });

    return fetch((`${URL}?${params}`),{headers: {
        'x-api-key': API_KEY
      }}).then((response) => {
      if (!response.ok) {
        throw new Error("404 not found!");
      }
      return response.json();
    });
  }



  export { fetchBreeds };
  export { fetchCatByBreed };