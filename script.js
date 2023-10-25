document.addEventListener("DOMContentLoaded", () => {
  let boton = document.getElementById("btn");
  let listaPokemon = document.getElementById("lista");

  let mostrar = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(res => res.json())
    .then(data =>{
      listaPokemon.innerHTML= JSON.stringify(data);
    })

  }
  boton.addEventListener("click", mostrar);
})
