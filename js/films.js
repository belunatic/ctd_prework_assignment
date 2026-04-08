let films = [];

//fetch the start war films
//fetch films
const fetchStarWarsFilms = async () => {
	try {
		const res = await fetch(`https://www.swapi.tech/api/films`);
		const data = await res.json();
		console.log(data.result);
		films = [...data.result];
	} catch (error) {
		console.log("something went wrong", error.message);
	}
};

document.addEventListener("DOMContentLoaded", async () => {
	//fetch the films
	await fetchStarWarsFilms();

	//grab the div container
	const sectionCard = document.getElementById("filmsListDiv");

	films.forEach((film) => {
		//create a div and add a class to it
		const filmCards = document.createElement("div");
		filmCards.classList.add("film-cards");

		//attach the film title to div
		const filmTitle = document.createElement("h2");
		filmTitle.textContent = film.properties.title;

		//attach the film director
		const filmDirector = document.createElement("p");
		filmDirector.innerHTML = `<strong> Director </strong> : <br/> ${film.properties.director}`;

		//attach the film producers
		const filmProducers = document.createElement("p");
		filmProducers.innerHTML = `<strong> Director </strong> : <br/> ${film.properties.producer}`;

		//attach the release date
		const filmReleaseDate = document.createElement("p");
		filmReleaseDate.innerHTML = `<strong> Release Date </strong> : <br/> ${new Date(film.properties.release_date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`;

		//attach the release date
		const filmOpenCrawl = document.createElement("p");
		filmOpenCrawl.innerHTML = ` <strong> Opening Crawl : </strong>  <br/> ${film.properties.opening_crawl}`;

		//hide the loading text
		const loadingText = document.getElementById("loading");
		loadingText.style.display = "none";

		filmCards.append(filmTitle);
		filmCards.append(filmDirector);
		filmCards.appendChild(filmReleaseDate);
		filmCards.appendChild(filmProducers);
		filmCards.append(filmOpenCrawl);
		sectionCard.append(filmCards);
	});
});
