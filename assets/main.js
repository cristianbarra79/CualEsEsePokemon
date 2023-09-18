const pokemones_lower = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "Sandshrew",
  "Sandslash",
  "Nidoran♀",
  "Nidorina",
  "Nidoqueen",
  "Nidoran♂",
  "Nidorino",
  "Nidoking",
  "Clefairy",
  "Clefable",
  "Vulpix",
  "Ninetales",
  "Jigglypuff",
  "Wigglytuff",
  "Zubat",
  "Golbat",
  "Oddish",
  "Gloom",
  "Vileplume",
  "Paras",
  "Parasect",
  "Venonat",
  "Venomoth",
  "Diglett",
  "Dugtrio",
  "Meowth",
  "Persian",
  "Psyduck",
  "Golduck",
  "Mankey",
  "Primeape",
  "Growlithe",
  "Arcanine",
  "Poliwag",
  "Poliwhirl",
  "Poliwrath",
  "Abra",
  "Kadabra",
  "Alakazam",
  "Machop",
  "Machoke",
  "Machamp",
  "Bellsprout",
  "Weepinbell",
  "Victreebel",
  "Tentacool",
  "Tentacruel",
  "Geodude",
  "Graveler",
  "Golem",
  "Ponyta",
  "Rapidash",
  "Slowpoke",
  "Slowbro",
  "Magnemite",
  "Magneton",
  "Farfetch’d",
  "Doduo",
  "Dodrio",
  "Seel",
  "Dewgong",
  "Grimer",
  "Muk",
  "Shellder",
  "Cloyster",
  "Gastly",
  "Haunter",
  "Gengar",
  "Onix",
  "Drowzee",
  "Hypno",
  "Krabby",
  "Kingler",
  "Voltorb",
  "Electrode",
  "Exeggcute",
  "Exeggutor",
  "Cubone",
  "Marowak",
  "Hitmonlee",
  "Hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr. Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Jolteon",
  "Flareon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
];

const pokemones = pokemones_lower.map((name) => name.toUpperCase());

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let pokemon = getRandomInt(1, 150);

var sourceImg = document.createElement("img");
sourceImg.src = `assets/img/${pokemon}.png`;
myTimeout = setTimeout(aca, 100);

async function aca() {
  console.log("ayuda", pokemones[pokemon - 1]);
  var canvas = document.createElement("canvas");

  var silhouetteImg = document.getElementById("silhouetteImg");
  var ctx = canvas.getContext("2d");
  canvas.width = sourceImg.width;
  canvas.height = sourceImg.height;
  ctx.drawImage(sourceImg, 0, 0);
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var pix = imgData.data;

  for (var i = 0, n = pix.length; i < n; i += 4) {
    pix[i] = 0;
    pix[i + 1] = 0;
    pix[i + 2] = 0;
    pix[i + 3] = pix[i + 3];
  }
  ctx.putImageData(imgData, 0, 0);

  silhouetteImg.src = canvas.toDataURL();
}

const entrada = document.querySelector("#entrada");
const opciones = document.querySelector("#opciones");

function ponerValor(nombre) {
  entrada.value = nombre;
}

const darOpciones = () => {
  var bedrooms = pokemones.filter((name) =>
    name.includes(entrada.value.toUpperCase())
  );
  let generar = bedrooms
    .map(
      (e) =>
        `
		<option value="${e}">
		
		`
    )
    .join("");
  opciones.innerHTML = generar;
};

entrada.addEventListener("input", () => {
  if (entrada.value.length > 2) {
    darOpciones();
  }
});

document.querySelector("#enviar").addEventListener("click", () => {
  if (entrada.value.toUpperCase() == pokemones[pokemon - 1]) {
    pokemon = getRandomInt(1, 150);
    sourceImg.src = `assets/img/${pokemon}.png`;
    entrada.value = "";
    opciones.innerHTML = "";

    entrada.focus();
    setTimeout(aca, 100);
  } else {
    entrada.value = "";
    opciones.innerHTML = "";
    entrada.focus();
    alert("erraste", entrada.value);
  }
});
