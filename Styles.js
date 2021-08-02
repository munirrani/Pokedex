const lightThemeColors = {
    backgroundColor: "white",
    headerTitleColor: "black",
    textColor: "black",
    shadowColor: "black"
}

const darkThemeColors = {
    backgroundColor: "#212121",
    backgroundColorSecondary: "#303030",
    headerTitleColor: "white",
    textColor: "white",
}

const global = {
    CapsuleTextBar: {
        container: {
            height: 30,
            alignSelf: "flex-start",
            alignItems:"center",
            justifyContent: "center",
            borderRadius: 50,
            marginRight: 5,
            marginBottom: 5,
        },
        text_style: {
            fontWeight: "500",
        }
    },
    Home: {
        flatlist_container: {
            justifyContent: "space-between",
            alignItems: "center",
        },
    },
    PokemonThumbnail: {
        card: {
            width: 190,
            height: 150,
            marginHorizontal: 6,
            marginVertical: 11,
            borderRadius: 20,
            overflow: "hidden"
        },
        detail_container: {
            justifyContent: "center",
        },
        detail_1: {
            textTransform: "capitalize",
            fontWeight: "600",
            fontSize: 20,
            marginBottom: 10,
        },
        pokemon_image: {
            width: 108,
            height: 108,
            position: "absolute",
            top: 25,
            left: 65,
            opacity: 0.05,
        },
        pokemon_icon_image: {
            width: 105,
            height: 105,
            position: "absolute",
            top: 25,
            left: 65,
        }
    },
    PokemonStats: {
        main: {
            flex: 1
        },
        header_container: {
            height: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        titlebar_container: {
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between"
        },
        typebar_container: {
            marginTop: 5,
            flexDirection: "row",
            alignContent: "center",
        },
        title: {
            fontSize: 40,
            fontWeight: "600",
            textTransform: "capitalize",
        },
        title2: {
            fontSize: 34,
            fontWeight: "600",
            alignSelf: "flex-end",
        },
        about_title: {
            fontSize: 30, 
            fontWeight: "700",
        },
        breeding_type_title: {
            fontSize: 20, 
            fontWeight: "700",
            marginTop: 20,
        },
        icon: {
            height: 20,
            width: 20,
        },
        first_part: {
            flex: 4,
            marginHorizontal: "6%",
        },
        pokemon_image: {
            width: 275,
            height: 275,
            alignSelf: "center",
            position: "absolute",
            top: "18%",
    
        },
        pokemon_icon_image: {
            width: 225,
            height: 225,
            alignSelf: "center",
            position: "absolute",
            top: "20%",
            left: "50%",
        },
        dots_image: {
            width: 75,
            height: 75,
            alignSelf: "center",
            position: "absolute",
            top: "22%",
            left: "18%",
        },
        second_part: {
            flex: 5,
            shadowRadius: 10,
            shadowOffset: {
                height: -10
            },
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
        },
        info_container: {
            marginHorizontal: "6%",
            marginTop: "9%"
        },
        description_text: {
            fontSize: 18, 
            fontWeight: "500",  
            marginTop: 10,
            textAlign: "justify",
        },
        hw_box_container: {
            height: 80,
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20,
        },
        hw_container: {
            justifyContent: "center",
        },
        hw_text: {
            fontWeight: "600",
            fontSize: 18,
            marginVertical: 4,
            marginRight: 10,
        },
        hw_info_container: {
            flexDirection: "row"
        },
        text_title: {
            color: "#999999"
        },
        breeding_info_container: {
            flexDirection: "row"
        },
        breeding_type_content: {
            fontSize: 18, 
            fontWeight: "500", 
            marginTop: 10,
            marginRight: 20,
        },
        gender_icon_image: {
            height: 18, 
            width: 18, 
            marginRight: 5,
        },
        gender_percentage_text: {
            fontSize: 18, 
            marginRight: 10,
        },
        breeding_type_container: {
            flexDirection: "row", 
            marginTop: 10,
        },
    },
}

export const lightTheme = {
    backgroundColor: lightThemeColors.backgroundColor,
    headerTitleColor: lightThemeColors.headerTitleColor,
    CapsuleTextBar: {
        container: {
            ...global.CapsuleTextBar.container,
            backgroundColor: 'rgba(0, 0, 0, 0.07)',
        },
        text_style: {
            ...global.CapsuleTextBar.text_style,
            color: "#444444",
        }
    },
    Home: {
        flatlist_container: {
            ...global.Home.flatlist_container,
            backgroundColor: lightThemeColors.backgroundColor,
        },
    },
    PokemonThumbnail: {
        ...global.PokemonThumbnail,
        detail_1: {
            ...global.PokemonThumbnail.detail_1,
            color: lightThemeColors.textColor,
        },
    },
    PokemonStats: {
        ...global.PokemonStats,
        title: {
            ...global.PokemonStats.title,
            color: lightThemeColors.textColor,
        },
        title2: {
            ...global.PokemonStats.title2,
            color: lightThemeColors.textColor,
        },
        about_title: {
            ...global.PokemonStats.about_title,
            color: lightThemeColors.textColor,
        },
        breeding_type_title: {
            ...global.PokemonStats.breeding_type_title,
            color: lightThemeColors.textColor,
        },
        pokemon_icon_image: {
            ...global.PokemonStats.pokemon_icon_image,
            opacity: 0.05,
        },
        dots_image: {
            ...global.PokemonStats.dots_image,
            opacity: 0.1,
        },
        second_part: {
            ...global.PokemonStats.second_part,
            backgroundColor: lightThemeColors.backgroundColor,
            shadowColor: lightThemeColors.textColor,
            shadowOpacity: 0.1,
        },
        description_text: {
            ...global.PokemonStats.description_text,
            color: lightThemeColors.textColor,
        },
        hw_box_container: {
            ...global.PokemonStats.hw_box_container,
            backgroundColor: lightThemeColors.backgroundColor,
            shadowRadius: 15,
            shadowOffset: {
                width: 3,
                height: 3
            },
            shadowColor: lightThemeColors.shadowColor,
            shadowOpacity: 0.10,
        },
        hw_text: {
            ...global.PokemonStats.hw_text,
            color: lightThemeColors.textColor,
        },
        gender_percentage_text: {
            ...global.PokemonStats.gender_percentage_text,
            color: lightThemeColors.textColor,
        },
    },
    StatusBar: {
        barStyle: "dark-content",
        backgroundColor: lightThemeColors.backgroundColor
    },
    typeColors:{
        normal: { backgroundColor: "#F4F4F4" },
        fire: { backgroundColor: "#fbbec2" },
        water: { backgroundColor: "#dbefff" },
        grass: { backgroundColor: "#ccfacf" },
        electric: { backgroundColor: "#ffffbc" },
        ice: { backgroundColor: "#add1ff" },
        fighting: { backgroundColor: "#fdb9bc" },
        poison: { backgroundColor: "#fec7ff" },
        ground: { backgroundColor: "#fee6bc" },
        flying: { backgroundColor: "#bb9cff" },
        psychic: { backgroundColor: "#ffc9de" },
        bug: { backgroundColor: "#f6cfaf" },
        rock: { backgroundColor: "#ffbba1" },
        ghost: { backgroundColor: "#d8daeb" },
        dark: { backgroundColor: "#ebc5a9" },
        dragon: { backgroundColor: "#d0beeb" },
        steel: { backgroundColor: "#e1e4e4" },
        fairy: { backgroundColor: "#ffbacf" },
    },
    backIcon: require('./assets/back-icon.png'),
    pokemonIcon: require('./assets/pokemon-icon.png'),
    dotsIcon: require('./assets/dots.png'),
    heartIcon: require('./assets/heart.png'),
}

export const darkTheme = {
    backgroundColor: darkThemeColors.backgroundColor,
    headerTitleColor: darkThemeColors.headerTitleColor,
    CapsuleTextBar: {
        container: {
            ...global.CapsuleTextBar.container,
            backgroundColor: 'rgba(255, 255, 255, 0.07)',
        },
        text_style: {
            ...global.CapsuleTextBar.text_style,
            color: "#f4f4f4"
        }
    },
    Home: {
        flatlist_container: {
            ...global.Home.flatlist_container,
            backgroundColor: darkThemeColors.backgroundColor,
        },
    },
    PokemonThumbnail: {
        ...global.PokemonThumbnail,
        detail_1: {
            ...global.PokemonThumbnail.detail_1,
            color: darkThemeColors.textColor,
        },
    },
    PokemonStats: {
        ...global.PokemonStats,
        title: {
            ...global.PokemonStats.title,
            color: darkThemeColors.textColor,
        },
        title2: {
            ...global.PokemonStats.title2,
            color: darkThemeColors.textColor,
        },
        about_title: {
            ...global.PokemonStats.about_title,
            color: darkThemeColors.textColor,
        },
        breeding_type_title: {
            ...global.PokemonStats.breeding_type_title,
            color: darkThemeColors.textColor,
        },
        pokemon_icon_image: {
            ...global.PokemonStats.pokemon_icon_image,
            opacity: 0.1, //
        },
        dots_image: {
            ...global.PokemonStats.dots_image,
            opacity: 0.15, //
        },
        second_part: {
            ...global.PokemonStats.second_part,
            backgroundColor: darkThemeColors.backgroundColor,
            shadowColor: darkThemeColors.textColor,
            shadowOpacity: 0.3, //
        },
        description_text: {
            ...global.PokemonStats.description_text,
            color: darkThemeColors.textColor,
        },
        hw_box_container: {
            ...global.PokemonStats.hw_box_container,
            backgroundColor: darkThemeColors.backgroundColorSecondary,
        },
        hw_text: {
            ...global.PokemonStats.hw_text,
            color: darkThemeColors.textColor,
        },
        gender_percentage_text: {
            ...global.PokemonStats.gender_percentage_text,
            color: darkThemeColors.textColor,
        },
    },
    StatusBar: {
        barStyle: "light-content",
        backgroundColor: darkThemeColors.backgroundColor
    },
    typeColors: {
        normal: { backgroundColor: "#9b9da1" },
        fire: { backgroundColor: "#af898e" },
        water: { backgroundColor: "#939eae" },
        grass: { backgroundColor: "#8ba990" },
        electric: { backgroundColor: "#bbbd92" },
        ice: { backgroundColor: "#7c95b7" },
        fighting: { backgroundColor: "#cd999c" },
        poison: { backgroundColor: "#c199c3" },
        ground: { backgroundColor: "#d4c09e" },
        flying: { backgroundColor: "#7a67a8" },
        psychic: { backgroundColor: "#b993a4" },
        bug: { backgroundColor: "#b79b83" },
        rock: { backgroundColor: "#b98977" },
        ghost: { backgroundColor: "#a8abba" },
        dark: { backgroundColor: "#857061" },
        dragon: { backgroundColor: "#9e91b3" },
        steel: { backgroundColor: "#757779" },
        fairy: { backgroundColor: "#b38595" },
    },
    backIcon: require('./assets/back-icon-light.png'),
    pokemonIcon: require('./assets/pokemon-icon-light.png'),
    dotsIcon: require('./assets/dots-light.png'),
    heartIcon: require('./assets/heart-light.png'),
}

// Non-themed
export const maleIcon = require('./assets/male-gender.png')
export const femaleIcon = require('./assets/femenine.png')