import { createContext, useContext, useState } from 'react'

const PokemonListContext = createContext()

export const PokemonListProvider = ({ children }) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedexList, setPokedexList] = useState([])

    const removeFromPokedex = (pokemon) => {
        setPokedexList(pokedexList.filter(item => item.order !== pokemon.order))
    }

    return (
        <PokemonListContext.Provider value={{
            pokemonList,
            setPokemonList,
            pokedexList,
            setPokedexList,
            removeFromPokedex,
        }}>
            {children}
        </PokemonListContext.Provider>
    )
}

export const usePokemonList = () => useContext(PokemonListContext)

export default PokemonListProvider