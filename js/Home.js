const list = document.querySelector(".song-titles__list");

function listAllSongs(allSongs) {
  console.log(allSongs);
  // list all Songs in the list
  let i = 1;
  list.innerHTML = "";
  allSongs.forEach((song) => {
    const songTitle = document.createElement("li");
    songTitle.classList.add("song-titles__list-item");
    songTitle.textContent = `${i}. ${song.name} - ${song.artists[0].name}`;
    list.appendChild(songTitle);
    i++;
  });
}
