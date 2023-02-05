const fetchLink = "https://rickandmortyapi.com/api/character";
let RMchracters = [];
const app = document.getElementById("app");
app.style.display = "grid";
app.style.borderRadius = "10px";

function chardataAdd(charobj, charName) {
  const charParam = document.createElement("p");
  charParam.innerText = `${charName}: ${charobj.charName}`;
  charData.appendChild(charParam);
}
fetch(`https://rickandmortyapi.com/api/character`)
  .then((response) => response.json())
  .then((user) => {
    console.log(user.results[12]);

    user.results.forEach((charEl, inx) => {
      const charFrame = document.createElement("div");
      charFrame.classList.add("frame");
      let characterImageURL = charEl.image;

      const characterImage = document.createElement("img");
      characterImage.classList.add("charImage");
      characterImage.setAttribute("src", characterImageURL);
      charFrame.appendChild(characterImage);
      const charData = document.createElement("div");
      charData.classList.add("charData");
      const charParam1 = document.createElement("p");
      charParam1.innerText = `Name: ${charEl.name}`;
      charData.appendChild(charParam1);
      const charParam4 = document.createElement("p");
      charParam4.innerText = `Species: ${charEl.species}`;
      charData.appendChild(charParam4);
      const charParam2 = document.createElement("p");
      charParam2.innerText = `Location: ${charEl.location.name}`;
      charData.appendChild(charParam2);
      const charParam3 = document.createElement("p");
      charParam3.innerText = `Status: ${charEl.status}`;
      charData.appendChild(charParam3);
      const charParam5 = document.createElement("p");
      charParam5.innerText = `First seen in: ${charEl.episode[0]}`;
      charData.appendChild(charParam5);

      charFrame.appendChild(charData);
      app.appendChild(charFrame);
    });
  });
