const jokeContainer = document.getElementById('joke');
const jokeButton = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`;
        jokeContainer.classList.add("fade");
    });
}

jokeButton.addEventListener("click", getJoke);

getJoke();