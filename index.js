    const inputForm = document.querySelector("form");
    const albumsList = document.querySelector("#albums");
    const songsList = document.querySelector("#songs");
    function renderAlbum(albumData) {
        let card = document.createElement('li');
        card.className = 'card';
        card.innerHTML = `
        <h3>${albumData.title}</h3>
        <img
            src="${albumData.image}"
            alt="${albumData.id} "
            />
        `
        document.querySelector("#albums").appendChild(card);
    }
        function getAlbums() {
        fetch(`http://localhost:3000/albums`)
        .then((response) => response.json())
        .then((data) => data.forEach(data => renderAlbum(data)));
        }


   function initialize(){
    getAlbums();
   }
   initialize();

 
const init = () => {
    const inputForm = document.querySelector("form");
    const albumsList = document.querySelector("#albums");
    const songsList = document.querySelector("#songs");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#search");
        albumsList.innerHTML = "";
        songsList.innerHTML = "";
        fetch(`http://localhost:3000/albums/${input.value}`)
        .then((response) => response.json())
        .then((data) => renderAlbum(data));
        });
    };
document.addEventListener("DOMContentLoaded", init);