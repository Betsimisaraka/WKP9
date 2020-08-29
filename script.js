//grab the ul from the html.
const listElement = document.querySelector('.movie_lists')
const url = 'https://ghibliapi.herokuapp.com/films';

//fetch the data from the url to get all of the films.
async function fetchMovies() {
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data;
}

//display the films
async function handleMovies() {
    const movies = await fetchMovies();
    displayMovies(movies);
}

//display the films by creating html
function displayMovies(movies) {
    //sort the movies from the best to the worst rt_score.
    const scoreSorted = movies.sort((a, b) => (b.rt_score - a.rt_score));
    //mapping through the movies to access all of them.
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
    //append the html in the DOM.
   listElement.innerHTML = html;
}

handleMovies();