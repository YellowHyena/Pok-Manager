//gets pokemons id from it's url. So when list renders I don't have to make a separate fetch for every pokemon to get it's id
const idOf = (pokemon) => {
        let trimmed = pokemon.url.split('/')
        return +trimmed[trimmed.length - 2]
    }
    //makes id 1 => 001, 10 => 010 etc.
const styledId = (id) => {
        if (id < 10) return '00' + id
        else if (id < 100) return '0' + id
        else return id
    }
    //same principle as idOf, with this I don't have to fetch all pokemon info for just the image
const iconOf = (pokemon) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${idOf(pokemon)}.png`
}

export { idOf, styledId, iconOf }