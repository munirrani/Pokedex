import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native';
import { Text, View, Image } from 'react-native'; 
import { Card } from 'react-native-elements'
import CapsuleTextBar from './CapsuleTextBar';

class PokemonThumbnail extends PureComponent {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this.props.navigation}>
                <Card containerStyle={[this.props.style.PokemonThumbnail.card, this.props.style.typeColors[this.props.type[0].type.name]]}>
                    <Image
                        source={this.props.style.pokemonIcon}
                        style={this.props.style.PokemonThumbnail.pokemon_image}
                    />
                    <Image
                        source={{uri: this.props.image}}
                        style ={this.props.style.PokemonThumbnail.pokemon_icon_image}
                    />
                    <View style={this.props.style.PokemonThumbnail.detail_container}>
                        <Text style={this.props.style.PokemonThumbnail.detail_1}>{this.props.name}</Text>
                        {this.props.type.map((pokemonType, index) => (
                            <CapsuleTextBar key={index} title={pokemonType.type.name} fontSize={14} />
                        ))}
                    </View>
                </Card>
            </TouchableOpacity>
        )
    }
}

export default PokemonThumbnail