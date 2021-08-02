import React, { useContext } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { maleIcon, femaleIcon } from '../Styles'
import CapsuleTextBar from '../components/CapsuleTextBar';
import { ThemeContext } from '../util/ThemeManager'
import TextDivider from '../components/TextDivider';

function toFeet(n) {
    var realFeet = ((n*0.393700) / 12);
    var feet = Math.floor(realFeet);
    var inches = Math.round((realFeet - feet) * 12);
    return feet + "\'" + inches + '\"';
}

const PokemonStats = (props) => {

    const { navigation } = props

    // use props.route.params to retrieve params from navigation.navigate()
    const { pokemon, index, species } = props.route.params

    const pokemonFirstType = pokemon.types[0].type.name
    const pokemonTypes = pokemon.types
    const pokemonImage = pokemon.sprites.other["official-artwork"].front_default
    const pokemonName = pokemon.name
    const pokemonNumber = index
    const pokemonHeight = pokemon.height
    const pokemonWeight = pokemon.weight
    
    const flavorText = species.flavor_text_entries
    const pokemonDescription = flavorText.filter(text => {
        return text.language.name == "en" && text.version.name == "omega-ruby"
    })[0].flavor_text.replace(/\n/g," ")

    const pokemonFemaleGenderRatio = species.gender_rate
    const pokemonEggGroup = species.egg_groups

    const { themeStyle } = useContext(ThemeContext)
    const style = themeStyle.PokemonStats
    const backgroundColor = themeStyle.typeColors[pokemonFirstType]

    return (
        <React.Fragment>
            <SafeAreaView style={backgroundColor} />
            <StatusBar {...themeStyle.StatusBar} backgroundColor={backgroundColor.backgroundColor} />
            <View style={[style.main, backgroundColor,]}>
                <View style={style.first_part}>
                    <View style={style.header_container}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={themeStyle.backIcon}
                                style={style.icon} 
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={themeStyle.heartIcon}
                                style={style.icon} 
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={style.titlebar_container}>
                        <Text style={style.title}>{pokemonName}</Text>
                        <Text style={style.title2}>#{pokemonNumber}</Text>
                    </View>
                    <View style={style.typebar_container}>
                        {pokemonTypes.map((pokemonType, index) => (
                            <CapsuleTextBar key={index} title={pokemonType.type.name} fontSize={22}/>
                        ))}
                    </View>
                </View>
                <Image
                    source={themeStyle.pokemonIcon}
                    style={style.pokemon_icon_image}
                />
                <Image
                    source={themeStyle.dotsIcon}
                    style={style.dots_image}
                />
                <View style={style.second_part}>
                    <View style={style.info_container}>
                        <Text style={style.about_title}>About</Text>
                        <Text style={style.description_text}>{pokemonDescription}</Text>
                        <View style={style.hw_box_container}>
                            <View style={style.hw_container}>
                                <Text style={[style.hw_text, style.text_title]}>Height</Text>
                                <View style={style.hw_info_container}>
                                    <Text style={style.hw_text}>{pokemonHeight*10}cm</Text>
                                    <TextDivider />
                                    <Text style={style.hw_text}>{toFeet(pokemonHeight*10)}</Text>
                                </View>
                            </View>
                            <View style={style.hw_container}>
                                <Text style={[style.hw_text, style.text_title]}>Weight</Text>
                                <View style={style.hw_info_container}>
                                    <Text style={style.hw_text}>{(pokemonWeight/10)}kg</Text>
                                    <TextDivider />
                                    <Text style={style.hw_text}>{(pokemonWeight*0.22046).toFixed(1)}lb</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={style.breeding_type_title}>Breeding</Text>
                        <View style={style.breeding_info_container}>
                            <View>
                                <Text style={[style.breeding_type_content, style.text_title]}>Gender</Text>
                                <Text style={[style.breeding_type_content, style.text_title]}>Egg Groups</Text>
                            </View>
                            <View>
                                { /* Gender  */}
                                <View style={style.breeding_type_container}>
                                    <Image source={maleIcon} style={style.gender_icon_image} />
                                    <Text style={style.gender_percentage_text}>{(8 - pokemonFemaleGenderRatio) * 12.5}%</Text>
                                    <Image source={femaleIcon} style={style.gender_icon_image} />
                                    <Text style={style.gender_percentage_text}>{pokemonFemaleGenderRatio * 12.5}%</Text>
                                </View>
                                { /* Egg Groups */}
                                <View style={style.breeding_type_container}> 
                                    {
                                        pokemonEggGroup.map((eggGroup, index) => (
                                            <React.Fragment key={index}>
                                                <Text key={index} style={[style.gender_percentage_text,{ textTransform: "capitalize"}]}>{eggGroup.name}</Text>
                                                { (index < pokemonEggGroup.length - 1) && (
                                                    <TextDivider key={index+pokemonEggGroup.length} />
                                                )}
                                            </React.Fragment>
                                        ))
                                    }
                                </View >
                            </View>
                        </View>
                    </View>
                </View>
                <Image
                    source={{uri: pokemonImage}}
                    style={style.pokemon_image}
                />
            </View>
        </React.Fragment>
    )
}

export default PokemonStats