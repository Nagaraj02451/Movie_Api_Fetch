const API_KEY = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a5320afe4b8da043225cea23c0eb7d80&page=1';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=a5320afe4b8da043225cea23c0eb7d80`;

console.log(SEARCH_URL);
console.log(API_KEY);


// const gon = [
//   {
//     "genres": [
//       {
//         "id": 28,
//         "name": "Action"
//       },
//       {
//         "id": 12,
//         "name": "Adventure"
//       },
//       {
//         "id": 16,
//         "name": "Animation"
//       },
//       {
//         "id": 35,
//         "name": "Comedy"
//       },
//       {
//         "id": 80,
//         "name": "Crime"
//       },
//       {
//         "id": 99,
//         "name": "Documentary"
//       },
//       {
//         "id": 18,
//         "name": "Drama"
//       },
//       {
//         "id": 10751,
//         "name": "Family"
//       },
//       {
//         "id": 14,
//         "name": "Fantasy"
//       },
//       {
//         "id": 36,
//         "name": "History"
//       },
//       {
//         "id": 27,
//         "name": "Horror"
//       },
//       {
//         "id": 10402,
//         "name": "Music"
//       },
//       {
//         "id": 9648,
//         "name": "Mystery"
//       },
//       {
//         "id": 10749,
//         "name": "Romance"
//       },
//       {
//         "id": 878,
//         "name": "Science Fiction"
//       },
//       {
//         "id": 10770,
//         "name": "TV Movie"
//       },
//       {
//         "id": 53,
//         "name": "Thriller"
//       },
//       {
//         "id": 10752,
//         "name": "War"
//       },
//       {
//         "id": 37,
//         "name": "Western"
//       }
//     ]
//   }
  
// ]

const main = document.getElementById("main");
const form = document.getElementById("form");
const input = document.getElementById("input");

// const top = document.getElementById("top");

// setg();
// function setg(){
//       top.innerHTML = "";
//       gon.forEach(genre=>{
//         const t = document.createElement('div');
//         t.classList.add('tag');
//         t.innerHTML=genre.id;
//         t.innerHTML = genre.name;
//         top.append(t);
//       })
// }

getmovies(API_KEY);


function getmovies(url){
    fetch(url).then(res => res.json()).then(data=>{
      console.log(data.results);
        showMovies(data.results);
    })
  }

  function showMovies(data){
    main.innerHTML = "";
    
      data.forEach((movie) =>{
        const{title ,poster_path ,vote_average ,overview } = movie;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        

        // console.log(movieEl.classList.contains("movie"));

        movieEl.innerHTML = `

        <div class="movieone">
        <img src="${IMG_URL + poster_path}" alt="${title}">
        <div id="title">
            <h3>"${title}"</h3>
            <span id="pop" }">"${vote_average}</span>
        </div>

        <div id="overview">
        <h1>Overview</h1>
            <h1> "${overview}"</h1>
             
        </div>
        </div>
        `
        main.append(movieEl);
      })
  }


form.addEventListener("submit" , (event)=>{

  event.preventDefault();      
  
  const inputItem = input.value;

  if(inputItem){
    getmovies(SEARCH_URL+'&query='+inputItem)
  }else{
    getmovies(API_KEY);
  }

})



  