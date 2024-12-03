// console.log("hello");

const END_POINT = "https://pokeapi.co/api/v2/pokemon/3";

// data.sprites['front_default']

async function getDate(url: string) {
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    console.log(data.sprites["front_default"]);

    return data;
  }
}

async function render(target: Element) {
  const img = document.createElement("img");

  const data = await getDate(END_POINT);
  img.src = data.sprites["front_default"];

  target.insertAdjacentHTML("beforeend", `${img}`);
}
