import React, { useEffect, useState, useContext } from 'react';
import { FlatList, StatusBar } from 'react-native'; 
import PokemonThumbnail from '../components/PokemonThumbnail';
import SafeAreaView from 'react-native-safe-area-view';
import { ThemeContext } from '../util/ThemeManager';

const Home = ({ navigation }) => {

    const [allPokemon, setAllPokemon] = useState([])
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    const [allPokemonSpecies, setAllPokemonSpecies] = useState([])
    const { themeStyle } = useContext(ThemeContext)
     
    const getAllPokemon = async() => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)
        
        function createPokemonObject(results) {
            results.forEach(async(result) => {
                const pokemonSpeciesURL = result.url.replace("pokemon", "pokemon-species")
                
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${result.name}`)
                const pokemonData = await pokemon.json()

                const pokemonSpecies = await fetch(pokemonSpeciesURL)
                const pokemonSpeciesData = await pokemonSpecies.json()
            
                setAllPokemon(currentList => [...currentList, pokemonData])
                setAllPokemonSpecies(currentList => [...currentList, pokemonSpeciesData])
            })
            
        }
        
        createPokemonObject(data.results)
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    const renderItem = ({item: pokemon, index}) => {
        return(                
            <PokemonThumbnail
                id={index}
                image={pokemon.sprites.other["official-artwork"].front_default}
                name={pokemon.name}
                type={pokemon.types}
                key={index}
                navigation={() => navigation.navigate("PokemonStats", { pokemon, index, species: allPokemonSpecies[index] })}
                style={themeStyle}
            />
        )
    }

    return (
        <React.Fragment>
            <SafeAreaView />
            <StatusBar {...themeStyle.StatusBar} />
            <FlatList 
                data={allPokemon}
                contentContainerStyle={themeStyle.Home.flatlist_container}
                numColumns={2}
                initialNumToRender={20}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.2}
                onEndReached={() => getAllPokemon()}
                renderItem={renderItem}
            />  
        </React.Fragment>
    )
}

export default Home