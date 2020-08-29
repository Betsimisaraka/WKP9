const listElement = document.querySelector('.movie_lists')
const url = 'https://ghibliapi.herokuapp.com/films';

async function fetchMovies() {
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data;
}

async function handleMovies() {
    const movies = await fetchMovies();
    displayMovies(movies);
}

function displayMovies(movies) {
    const scoreSorted = movies.sort((a, b) => (b.rt_score - a.rt_score));
    const html = scoreSorted.map(movie => {
        return `
        <li class="container" data-id="${movie.id}">
            <h2>${movie.title}</h2>
            <small class="date">Release-date: ${movie.release_date}</small>
            <p class="description">${movie.description}</p>
            <p class="director">Director: ${movie.director}</p>
            <p class="producer">Producer: ${movie.producer}</p>
            <small class="score">rt-score:${movie.rt_score}</small>
        </li>
        `;
    }).join('');
   listElement.innerHTML = html;
    console.log(html);
}

handleMovies();

//const listElement = document.querySelector('.movie_lists')

// async function fetchMovies() {
//     const response = await fetch('https://ghibliapi.herokuapp.com/films', {
//             headers: {
//                 Accept: 'application/json',
//             }
//         });
//         console.log(response);
//         const data = await response.json();
//         return data;
// }

// async function displayMovies() {
//     const results = await fetchMovies();
//     const scoreSorted = results.sort((a, b) => (b.rt_score - a.rt_score));
//     const html = scoreSorted.map(movie => {
//         return `
//         <li class="container" data-id="${movie.id}">
//             <h2>${movie.title}</h2>
//             <small class="date">Release-date: ${movie.release_date}</small>
//             <p class="description">${movie.description}</p>
//             <p class="director">Director: ${movie.director}</p>
//             <p class="producer">Producer: ${movie.producer}</p>
//             <small class="score">rt-score:${movie.rt_score}</small>
//         </li>
//         `;
//     }).join('');
//    listElement.innerHTML = html;
//     console.log(html);
// } 

// displayMovies();

