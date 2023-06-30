const init = () => {
    const form = document.querySelector("#album-form");
    const albums = document.querySelector("#albums");
    const songs = document.querySelector("#songs");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        albums.innerHTML = "";
        songs.innerHTML = "";

        fetch(`http://localhost:3000/albums/${event.target.search.value}`)
        .then(response => response.json())
        .then(data => data.albums.forEach(album))

    })

    function album(albumData) {

    }

}
document.addEventListener("DOMContentLoaded", init);