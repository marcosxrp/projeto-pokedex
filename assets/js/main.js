const offset = 0
const limit = 10

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <div class="name_number">
                <span class="poke_name">
                    ${pokemon.name}
                </span>
                <span class="poke_number">001</span>
            </div>
            <div class="types_img">
                <div class="types">
                    <span class="poke_type">
                        Grass
                    </span>
                    <span class="poke_type">
                        Poison
                    </span>
                </div>
                <img class="poke_img" src="assets/images/bulbasaur.png" alt="bulbasaur">
            </div>
        </li>
    `
}

pokeAPI.getPokemons().then((pokemons) => {
    
}
)