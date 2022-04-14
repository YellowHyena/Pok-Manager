const idOf = (pokemon) => {
    let trimmed = pokemon.url.split('/')
    return +trimmed[trimmed.length - 2]
}

const styledIdOf = (pokemon) => {
    let id = idOf(pokemon)
    if (id < 10) return '00' + id
    else if (id < 100) return '0' + id
    else return id
}

const iconOf = (pokemon) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${idOf(pokemon)}.png`
}

export { idOf, styledIdOf, iconOf }