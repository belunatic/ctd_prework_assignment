let character = [];

//fetch the star wars character
const fetchStarWarCharacter = async () => {
	try {
		const res = await fetch("https://www.swapi.tech/api/people");
		const data = await res.json();
		console.log(data.results);
		character = [...data.results];
	} catch (error) {
		console.log("something went wrong", error.message);
	}
};

//fetch character profile
const fetchStartWarCharacterProfile = async (id) => {
	try {
		const res = await fetch(`https://www.swapi.tech/api/people/${id}`);
		const data = await res.json();
		return data.result.properties;
	} catch (error) {
		console.log("something went wrong", error.message);
	}
};

document.addEventListener("DOMContentLoaded", async () => {
	//fetch characters
	await fetchStarWarCharacter();
	//grab the div container
	const sectionCard = document.getElementById("characterListDiv");

	character.forEach(async (char) => {
		//create a div and add a class to it
		const characterCards = document.createElement("div");
		characterCards.classList.add("character-cards");

		//attach the character name to div
		const characterName = document.createElement("h2");
		characterName.textContent = char.name;

		//get character profile info
		const characterProfile = await fetchStartWarCharacterProfile(char.uid);
		//UL
		//character profile ul
		const characterProfileUl = document.createElement("ul");
		//LI
		//character birth year
		const characterBirthYear = document.createElement("li");
		characterBirthYear.textContent = `Birth Year: ${characterProfile.birth_year}`;
		characterProfileUl.appendChild(characterBirthYear);
		//character gender
		const characterGender = document.createElement("li");
		characterGender.textContent = `Gender: ${characterProfile.gender}`;
		characterProfileUl.appendChild(characterGender);
		//character films
		const characterFilms = document.createElement("li");
		const filmsList = characterProfile.films.join(", ");
		characterFilms.textContent = `Films: ${filmsList}`;
		characterProfileUl.appendChild(characterFilms);
		//character learn more url
		const characterLearnMore = document.createElement("li");
		characterLearnMore.innerHTML = `<a href="${characterProfile.url}" target="_blank">Learn More</a>`;
		characterProfileUl.appendChild(characterLearnMore);
		//APPEND TO UL
		//append the ul to the character card
		characterCards.appendChild(characterProfileUl);

		//APPEND TO DIV
		characterCards.appendChild(characterName);
		characterCards.appendChild(characterProfileUl);
		sectionCard.appendChild(characterCards);
	});
});
