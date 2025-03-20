// Obtener elementos del DOM
const urlbase = "https://pokeapi.co/api/v2/";
const buttonElement = document.getElementById('acc');
const imgElement = document.getElementById('pica');
const nameElement = document.getElementById('nombre');
const descriptionElement = document.getElementById('descripcion');

// Variable para alternar entre Pikachu y Raichu
let isPikachu = true;

// Función para cargar los datos del Pokémon
function loadPokemon(id, description) {
  fetch(`${urlbase}pokemon/${id}/`)
    .then((response) => response.json())
    .then((data) => {
      imgElement.src = data.sprites.front_default;
      nameElement.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      descriptionElement.textContent = description;
      console.log(data);
    })
    .catch(error => {
      console.error("Error al cargar el Pokémon:", error);
    });
}

// Carga inicial de Pikachu
loadPokemon(25, "Un pokemon eléctrico con ataques poderosos.");

// Agregar evento de clic al botón para alternar entre Pikachu y Raichu
buttonElement.addEventListener('click', () => {
  if (isPikachu) {
    // Cambiar a Raichu
    loadPokemon(26, "La evolución de Pikachu. Un Pokémon de tipo eléctrico más poderoso.");
    buttonElement.textContent = "Ver Pikachu";
  } else {
    // Volver a Pikachu
    loadPokemon(25, "Un pokemon eléctrico con ataques poderosos.");
    buttonElement.textContent = "Evolución";
  }
  // Invertir el estado
  isPikachu = !isPikachu;
});