import React, { useContext } from "react"
import { ThemeContext } from "../util/ThemeManager"
import ModalSelector from 'react-native-modal-selector';

const Selection = () => {

    const { selectTheme, themeOption, isDark } = useContext(ThemeContext)
  
    const data = [
      {key: "system", label: "System"},
      {key: "light", label: "Light"},
      {key: "dark", label: "Dark"},
    ]
  
    return (
      <ModalSelector 
        data={data} 
        backdropPressToClose={true} 
        cancelStyle={{display: "none"}} 
        selectStyle={{
          backgroundColor: isDark ? "#212121" : "#ffffff"
        }}
        selectTextStyle={{
          color: isDark? "#ffffff" : "#000000",
        }}
        overlayStyle={{
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        optionContainerStyle={{
          backgroundColor: isDark? "#212121" : "#ffffff",
          borderRadius: 15,
          marginHorizontal: "20%"
        }}
        optionTextStyle={{
          color: isDark? "#ffffff" : "#000000",
          fontSize: 17,
          fontWeight: "500",
        }}
        animationType="fade" 
        selectedKey={themeOption}
        style={{marginRight: 20}} 
        onChange={({key}) => { selectTheme(key)}} 
      />
    )
}

export default Selection