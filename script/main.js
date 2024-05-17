// Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h key Giphy API;
let APIKEY = "Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h";

document.addEventListener("DOMContentLoaded", getGifs);

function getGifs() {
  document.getElementById("btnSearch").addEventListener("click", (e) => {
    e.preventDefault();
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        console.log(content.data);
        console.log("META", content.meta);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
