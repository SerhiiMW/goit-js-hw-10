import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
// import SlimSelect from 'slim-select'

// new SlimSelect({
//    select: '#single'
//  })

let storedBreeds = [];

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

   refs.catInfo.innerHTML =   
  `<img class="cat-img" src="${cat.url}" alt="${arr.name}" width="500px" height="100%">
      <div class="cat">
         <h1 class="cat-name">${arr.name}</h1>
         <p class="cat-description">${arr.description}</p>
         <p class="cat-temperament"><span class="title-temperament">Temperament: </span>${arr.temperament}</p>
      </div>`

      })
      .catch(function(err) {
         console.log(err);
         Notify.failure(err.message);
      });
    }     
