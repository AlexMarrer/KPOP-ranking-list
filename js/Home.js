const list = document.querySelector(".song-titles__list");
let oldArtist = "";

function listAllSongs(allSongs) {
  console.log(allSongs);
  // list all Songs in the list
  let i = 1;
  list.innerHTML = "";
  if (oldArtist !== allSongs[0].artists[0].href) {
    setLogo(allSongs[0].artists[0].href);
    oldArtist = allSongs[0].artists[0].href;
  }
  allSongs.forEach((song) => {
    const songTitle = document.createElement("li");
    songTitle.classList.add("song-titles__list-item");
    songTitle.textContent = `${i}. ${song.name} - ${song.artists[0].name}`;
    list.appendChild(songTitle);
    i++;
  });
}
