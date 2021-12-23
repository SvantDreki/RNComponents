import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import HeaderTitulo from '../components/HeaderTitulo'
import { ThemeContext } from '../context/theme/ThemeContext'
import { styles } from '../themes/appTheme'

const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={ styles.contenedor }>
            <HeaderTitulo tittle="Theme" />

            <View style={ stylesTheme.btnContenedor }>
                <TouchableOpacity
                    style={{ 
                        ...stylesTheme.btn,
                        backgroundColor: colors.primary 
                    }}
                    activeOpacity={ 0.7 }
                    onPress={ setLightTheme }
                >
                    <Text style={ stylesTheme.btnText } >Light</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ 
                        ...stylesTheme.btn,
                        backgroundColor: colors.primary 
                    }}
                    activeOpacity={ 0.7 }
                    onPress={ setDarkTheme }
                >
                    <Text style={ stylesTheme.btnText } >Dark</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}

const stylesTheme = StyleSheet.create({
    btn: {
        width: 150,
        backgroundColor: '#5856d6',
        justifyContent: 'center',
        height: 50,
        borderRadius: 20
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22
    },
    btnContenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ChangeThemeScreen
