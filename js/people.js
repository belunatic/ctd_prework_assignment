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

document.addEventListener("DOMContentLoaded", async () => {
	await fetchStarWarCharacter();
	const characterList = document.getElementById("character-list");

	character.forEach((char) => {
		const li = document.createElement("li");
		li.textContent = char.name;
		characterList.appendChild(li);
	});
});
