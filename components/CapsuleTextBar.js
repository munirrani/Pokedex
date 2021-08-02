import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ThemeContext } from '../util/ThemeManager';

const CapsuleTextBar = (props) => {

    const { themeStyle } = useContext(ThemeContext)

    const text_style1 = {
        fontSize: props.fontSize,
        marginHorizontal: props.fontSize / 2,
    }

    return (
        <View style={{...themeStyle.CapsuleTextBar.container}}>
            <Text style={{...themeStyle.CapsuleTextBar.text_style, ...text_style1}}>{props.title}</Text>
        </View>
    )
}

export default CapsuleTextBar