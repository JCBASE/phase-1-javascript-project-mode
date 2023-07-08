    const inputForm = document.querySelector("form");
    const albumsList = document.querySelector("#albums");
    const songsList = document.querySelector("#songs");
    function renderAlbum(albumData) {
        let albumList = document.getElementById("albums")
        let card = document.createElement('li');
        card.className = 'card';
        card.innerHTML = `
        <h3>${albumData.title}</h3>
        <img
            src="${albumData.image}"
            alt="${albumData.id} "
            />
        <div class="content">
            <button> Songs </button>
            </div>
        `
        card.querySelector("button").addEventListener('click', (e) => handleClick(albumData));

        albumList.appendChild(card);
    }

    function handleClick(albumData){
        fetch(`http://localhost:3000/albums/${albumData.id}`)
        .then(response => response.json())
        .then(data => renderTracks(data))   
    }

    function renderTracks(album) {
        let songList = document.getElementById("songs");
        for(i = 0; i < album.tracks.length; ++i) {
            let li = document.createElement("li");
            li.className = 'li'
            li.innerHTML = `<h4> </h4>
            ${album.tracks[i]}
            `;
            songList.append(li);
        }
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