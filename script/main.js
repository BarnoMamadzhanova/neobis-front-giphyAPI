// Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h key Giphy API;

document.addEventListener("DOMContentLoaded", getGifs);

function getGifs() {
  document.getElementById("btnSearch").addEventListener("click", (e) => {
    e.preventDefault();
    const APIKEY = "Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((content) => {
        // console.log(content.data);
        // console.log("META", content.meta);

        // Clear previous results
        const contentBox = document.querySelector("#content-box");
        contentBox.innerHTML = "";

        for (let gif of content.data) {
          let figure = document.createElement("figure");
          let img = document.createElement("img");
          img.src = gif.images.downsized.url;
          img.alt = gif.title;
          figure.appendChild(img);

          let gifFigure = document.createElement("div");
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
