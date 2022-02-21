export const getPokemonById = async (id) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(response => {
      const {
        name,
        order: id,
        height,
        weight,
        base_experience: exp,
        stats,
        moves,
        abilities,
        types,
        sprites
      } = response

      const allStats = stats.map(stats => {
        const { base_stat: baseStat } = stats
        const { name } = stats.stat
        return { baseStat, name }
      })

      const allMoves = moves.slice(0, 5).map(move => {
        return move.move.name
      })

      const allAbilities = abilities.map(ability => {
        return ability.ability.name
      })

      const typesPokemon = types.map(type => {
        return typeof type.type.name !== 'undefined' && type.type.name
      })

      const { front_default: image } = sprites.other.home

      return { name, image, id, height, weight, exp, allStats, allMoves, allAbilities, typesPokemon }
    })
}

export const getPokemonByName = async (name) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then(response => {
      const {
        name,
        order: id,
        height,
        weight,
        base_experience: exp,
        stats,
        moves,
        abilities,
        types,
        sprites
      } = response

      const allStats = stats.map(stats => {
        const { base_stat: baseStat } = stats
        const { name } = stats.stat
        return { baseStat, name }
      })

      const allMoves = moves.slice(0, 5).map(move => {
        return move.move.name
      })

      const allAbilities = abilities.map(ability => {
        return ability.ability.name
      })

      const typesPokemon = types.map(type => {
        return typeof type.type.name !== 'undefined' && type.type.name
      })

      const { front_default: image } = sprites.other.home

      return { name, image, id, height, weight, exp, allStats, allMoves, allAbilities, typesPokemon }
    })
}
