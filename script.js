const jokeTag = document.getElementById("joke");
const btn = document.getElementById("btn");
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke = () =>{
    jokeTag.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeTag.textContent = `${item.joke}`;
        jokeTag.classList.add("fade");
    })
}
btn.addEventListener("click",getJoke);
getJoke();