const submitButton = document.querySelector(".song-titles__button");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  getBearerToken();
});

async function getBearerToken() {
  await fetch("https://accounts.spotify.com/api/token", {
    credentials: "omit",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
      Accept: "*/*",
      "Accept-Language": "de,en-US;q=0.7,en;q=0.3",
      "Content-Type": "application/x-www-form-urlencoded",
      "Sec-Fetch-Dest": "empty",
    },
    body: "grant_type=client_credentials&client_id=baab6a8da98046b9a0e4ea618b13c0bc&client_secret=2e1e482149624db1a7b60c5d4dedb040",
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const bearerToken = data.access_token;
        getAllSongsBySpecificArtist("nmixx", bearerToken);
      }
    })
    .catch((error) => console.error("Error:", error));
}

async function getAllSongsBySpecificArtist(artist, bearerToken) {
  await fetch(
    `https://api.spotify.com/v1/search?q=artist:${artist}&type=track&market=US&limit=50`,
    {
      credentials: "omit",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0",
        Accept: "*/*",
        "Accept-Language": "de,en-US;q=0.7,en;q=0.3",
        "Content-Type": "application/x-www-form-urlencoded",
        "Sec-Fetch-Dest": "empty",
      },
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data);
        // Hier könntest du eine Sortierung durchführen basierend auf der Popularität, die im Track-Objekt enthalten ist.
        const tracks = data.tracks.items;
        // Nehmen wir an, du sortierst sie clientseitig (dies ist nur ein Beispiel und muss angepasst werden):
        const sortedTracks = tracks.sort((a, b) => b.popularity - a.popularity);
        console.log("Beliebte K-Pop Tracks:", sortedTracks);
        return sortedTracks;
      }
    })
    .catch((error) => console.error("Error:", error));
}
