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
        let card = document.createElement('li');
        card.className = 'card';
        card.innerHTML = `
        <h2>${userData.id}</h2>
        <img
            src="${albumData.image}"
            alt="${albumData.id} "
            />
        `
        albums.append(card);
    }

}
document.addEventListener("DOMContentLoaded", init);