// const axios = require("axios");

const btnElement = document.getElementById("joke-button");
const jokeElement = document.getElementById("joke-content");
const loadingElement = document.getElementById("loading-icon");
const jokeElementPara1 = document.getElementById("para-1");
const jokeElementPara2 = document.getElementById("para-2");
function showLoader() {
	loadingElement.style.display = "flex";
	jokeElement.style.display = "none";
}

function hideLoader() {
	loadingElement.style.display = "none";
	jokeElement.style.display = "flex";
}

// API

const apiKey = "e3503c9940msh0501826414505bdp185dabjsnf2a0c26e5148";

const url = "https://dad-jokes.p.rapidapi.com/random/joke";
const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "e3503c9940msh0501826414505bdp185dabjsnf2a0c26e5148",
		"X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
	},
};

async function getJoke() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);

		btnElement.disabled = false;
		btnElement.innerText = "Make me laugh!";
		// jokeElement.innerText =
		// 	result.body[0].setup + " " + " " + result.body[0].punchline;
		jokeElementPara2.innerText = result.body[0].punchline;
		jokeElementPara1.innerText = result.body[0].setup;
	} catch (error) {
		jokeEl.innerText = "Error 404: Humor not found! 😂 Please try again.";
		btnEl.disabled = false;
		btnEl.innerText = "Make me laugh!";
		console.log(error);
	} finally {
		hideLoader();
	}
}

btnElement.addEventListener("click", getJoke);

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// const btnEl = document.getElementById("btn");
// const jokeEl = document.getElementById("joke-content");
// const loadingEl = document.getElementById("loadingIcon");

// function showLoader() {
//   loadingEl.style.display = "flex";
//   jokeEl.style.display = "none";
// }

// function hideLoader() {
//   loadingEl.style.display = "none";
//   jokeEl.style.display = "flex";
// }

// const apiKey = "xVt9+RflozUC/ItgLyL1Dg==KZywXkLKpgvESefC";

// var limit = 1;

// const apiURL = "https://api.api-ninjas.com/v1/dadjokes?" + limit;

// const options = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": apiKey,
//   },
// };

// async function getJoke() {
//   try {
//     btnEl.disabled = true;
//     btnEl.innerText = "Let me think...";
//     showLoader();

//     const response = await fetch(apiURL, options);
//     const data = await response.json();

//     console.log(data);

//     btnEl.disabled = false;
//     btnEl.innerText = "Make me laugh!";
//     jokeEl.innerText = data[0].joke;
//   } catch (error) {
//     jokeEl.innerText = "Error 404: Humor not found! 😂 Please try again.";
//     btnEl.disabled = false;
//     btnEl.innerText = "Make me laugh!";
//     console.log(error);
//   } finally {
//     hideLoader();
//   }
// }

// btnEl.addEventListener("click", getJoke);
