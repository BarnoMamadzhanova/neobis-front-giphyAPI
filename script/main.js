// Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h key Giphy API;
// let APIKEY = "Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h";

// function getGifs() {
//   document.getElementById("btnSearch").addEventListener("click", (e) => {
//     e.preventDefault();
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=12&q=`;
//     let str = document.getElementById("search").value.trim();
//     url = url.concat(str);
//     console.log(url);
//     fetch(url)
//       .then((response) => response.json())
//       .then((content) => {
//         console.log(content.data);
//         console.log("META", content.meta);

//         for (let gif of content.data) {
//             let figure = document.createElement("figure");
//             let img = document.createElement("img");
//             let figcaption = document.createElement("figcaption");
//             img.src = content.data[gif].images.downsized.url;
//             img.alt = content.data[gif].title;
//             figcaption.textContent = content.data[gif].title;
//             figure.appendChild(img);
//             figure.appendChild(figcaption);
//             let gifs = document.querySelector("#content-box");
//             gifs.insertAdjacentElement(
//               "afterbegin",
//               `
//             <div class="content-box__grid">
//                 <div class="content-box__figure">
//                     ${figure}
//                 </div>
//             </div>
//           `
//             );
//             document.querySelector("#search").value = "";
//           });
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   });

document.addEventListener("DOMContentLoaded", getGifs);

function getGifs() {
  document.getElementById("btnSearch").addEventListener("click", (e) => {
    e.preventDefault();
    const APIKEY = "Sf2FMFg5ZDgB8uu0aboKsldCFJbmgN7h"; // Make sure to replace 'YOUR_API_KEY' with your actual Giphy API key
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

          //   let gifContainer = document.createElement("div");
          //   gifContainer.classList.add("content-box__grid");
          let gifFigure = document.createElement("div");
          gifFigure.classList.add("content-box__figure");
          gifFigure.appendChild(figure);
          //   gifContainer.appendChild(gifFigure);

          contentBox.appendChild(gifFigure);
        }

        document.querySelector("#search").value = "";
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

//   getGifs();
