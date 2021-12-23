import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../themes/appTheme'

interface Props {
    tittle: string
}

const HeaderTitulo = ({ tittle }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)

    //Sirve para ios 
    //le da un margen top  
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text 
                style={{ 
                    ...styles.tittle,
                    color: colors.text
                }} 
            >
                { tittle }
            </Text>
        </View>
    )
}

export default HeaderTitulo
