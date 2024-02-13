
axios
  .get("https://api.vschool.io/pokemon")
    .then((response) => {
      const pokemon = response.data.objects[0].pokemon;
      console.log(pokemon)
    for (let i = 0; i < pokemon.length; i++) {
      const h1 = document.createElement("h1");
      h1.textContent = pokemon[i].name;
      document.body.appendChild(h1);
    }
  })
  .catch((error) => console.log(error));
