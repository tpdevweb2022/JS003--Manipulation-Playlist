const songList = [
  "Au bout de mes rêves",
  "By the Way",
  "Think",
  "Amazing Grace",
  "Elle attend",
  "Can't Stop",
  "Easily",
  "La Cantine",
  "A nos actes manqués",
  "Le tirelipimpon",
  "Entre gris clair et gris foncé",
  "Filles faciles",
  "Big bisou",
  "Chain of Fools",
  "Call Me",
  "Je ne vous parlerai pas d'elle",
  "Under the Bridge",
  "Respect",
  "Tout petit monde",
  "Papayou",
  "You Make Me Feel Like a Natural Woman",
];
const totalSongs = songList.length;
const yieldActiveSong = document.getElementById("activeSong");

let activeSong = 0;
yieldActiveSong.innerHTML = songList[activeSong];

const artists = document.getElementsByClassName("artist");
const goldmanList = document.getElementById("goldmanList");
const redHotList = document.getElementById("redHotList");
const franklinList = document.getElementById("franklinList");
const carlosList = document.getElementById("carlosList");

function addSongToArtist(active, artist) {
  let li = document.createElement("li");
  li.innerHTML = active;
  document.getElementById(artist + "List").appendChild(li);
  if (activeSong != totalSongs - 1) {
    yieldActiveSong.innerHTML = songList[(activeSong += 1)];
  } else {
    yieldActiveSong.innerHTML = "Plus de chansons";
    document.getElementsByClassName("buttons")[0].innerHTML = "";
  }
}
