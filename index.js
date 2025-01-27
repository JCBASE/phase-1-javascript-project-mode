    const albumsList = document.querySelector("#albums");
    const songsList = document.querySelector("#songs");
    const EMPTY_HEART = '♡'
    const FULL_HEART = '♥'
    function renderAlbum(albumData) {
        let albumList = document.getElementById("albums");
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
        card.querySelector("button").addEventListener('click', (e) => handleClick(albumData), {once: true});

        albumList.appendChild(card);
    }

    function handleClick(albumData){
        fetch(`http://localhost:3000/albums/${albumData.id}`)
        .then(response => response.json())
        .then(data => renderTracks(data))  
    }

    function renderTracks(album) {
        let songList = document.getElementById("songs");
        album.tracks.forEach(track => {
            let li = document.createElement("li");
            li.className = 'li'
            li.innerHTML = `<h4> </h4>
            ${track} <span class="like-glyph">&#x2661;</span>
            `;
            li.querySelector('.like-glyph').addEventListener('click', likeCallback);
            songList.append(li);
        })
        let recList = document.getElementById("recommend-songs");
        let random = Math.floor(Math.random() * album.tracks.length);
        let rl = document.createElement('li');
        rl.className = 'rl';
        rl.innerHTML = ` 
        ${album.tracks[random]}
        `
        recList.appendChild(rl);
    }

    function likeCallback(e) {
        const heart = e.target;
        if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart')
        } else if (heart.textContent === FULL_HEART) {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
    }

    function darkMode() {
        document.body.classList.toggle("dark-mode"); 
    }

    function getAlbums() {
        fetch(`http://localhost:3000/albums`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(album => renderAlbum(album))
        });
    }
 
const init = () => {
    getAlbums();
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