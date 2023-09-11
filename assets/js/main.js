const offset = 0
const limit = 10

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <div class="name_number">
                <span class="poke_name">
                    ${pokemon.name}
                </span>
                <span class="poke_number">#${String(pokemon.number).padStart(3, "0")}</span>
            </div>
            <div class="types_img">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="poke_type ${type}">${type}</li>`).join('')}
                </ol>
                <img class="poke_img" src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById(`pokemonList`)

pokeAPI.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("")
})