// Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h key Giphy API;

document.addEventListener("DOMContentLoaded", getGifs);
const searchBtn = document.getElementById("btnSearch");
const contentBox = document.querySelector("#content-box");

function getGifs() {
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const APIKEY = "Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=24&q=`;
    const str = document.getElementById("search").value.trim();
    const urlFetch = url.concat(str);

    fetch(urlFetch)
      .then((response) => response.json())
      .then((content) => {
        // console.log(content.data);
        // console.log("META", content.meta);

        contentBox.innerHTML = "";

        for (let gif of content.data) {
          const figure = document.createElement("figure");
          const img = document.createElement("img");
          img.src = gif.images.downsized.url;
          img.alt = gif.title;
          figure.appendChild(img);

          const gifFigure = document.createElement("div");
          gifFigure.classList.add("content-box__figure");
          gifFigure.appendChild(figure);

          contentBox.appendChild(gifFigure);
        }
        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}
