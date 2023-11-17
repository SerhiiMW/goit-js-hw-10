// import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
// Notify.failure('Qui timide rogat docet negare');

// import SlimSelect from 'slim-select'
import axios from 'axios';

axios.defaults.headers.common["x-api-key"] = "live_9NjgphPGH74YSYxqRUUuc0LqGKpWE0CiUvRBUaeqxH418ruNJH5hOcMAe8a5yNl7";


const refs = {
    select: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
}

fetchBreeds()  
    .then((data) => {
   storedBreeds = data;
    for (let i = 0; i < storedBreeds.length; i++) {
     const breed = storedBreeds[i];
     let option = document.createElement('option');
     option.classList.add("option-value");
     option.value = `${breed.id}`;;
     option.innerHTML = `${breed.name}`;
     refs.select.appendChild(option);
     }
 })
 .catch(function(err) {
    console.log(err);
    Notify.failure(err.message);
 });

 refs.select.addEventListener("change", setOutput);
 
 function setOutput(event) {
    let breedId = event.currentTarget.value;
    refs.catInfo.innerHTML = ``
 fetchCatByBreed (breedId)
    .then((data) => {
    let cat = []; 
    cat = data[0];
    let breeds = {};
    breeds = cat.breeds;
    let arr = [];
    arr = breeds[0];


   //  const h2Elname = document.createElement("h2");
   //  const h3Eldescription = document.createElement("h3");
   //  const h3Eltemperament = document.createElement("h3");
   //  const imgEl = document.createElement("img");

   //  h2Elname.classList.add("cat-name");
   //  h3Eldescription.classList.add("cat-description");
   //  h3Eltemperament.classList.add("cat-temperament");
   //  imgEl.classList.add("cat-img");

   //  h2Elname.textContent = arr.name;
   //  h3Eldescription.textContent = arr.description;
   //  h3Eltemperament.textContent = arr.temperament;
   //  imgEl.src = cat.url;
   //  imgEl.alt = arr.name;

   //  refs.catInfo.append(imgEl, h2Elname, h3Eldescription, h3Eltemperament);


   refs.catInfo.innerHTML =   
  `<img class="cat-img" src="${cat.url}" alt="${arr.name}" width="500px" height="100%">
      <div class="cat">
         <h1 class="cat-name">${arr.name}</h1>
         <p class="cat-description">${arr.description}</p>
         <p class="cat-temperament"><span class="title-temperament">Temperament: </span>${arr.temperament}</p>
      </div>`
      
      const catList = document.querySelector('.cat')
      // const catName = document.querySelector('.cat-name')
      // const catDescription = document.querySelector('.cat-description')
      // const catTemperament = document.querySelector('.cat-temperament')
      const titleTemperament = document.querySelector('.title-temperament')

      refs.catInfo.style.display = "flex";
      catList.style.marginLeft = "20px"
      catList.style.maxWidth = "800px"
      titleTemperament.style.fontWeight = "800"

      })
      .catch(function(err) {
         console.log(err);
         Notify.failure(err.message);
      });
    }     
