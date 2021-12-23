import React from 'react'
import { FlatList, View } from 'react-native'

import FlatListMenuItem from '../components/FlatListMenuItem'
import HeaderTitulo from '../components/HeaderTitulo'
import ItemSeparador from '../components/ItemSeparador'
import { menuItems } from '../data/menuItems'
import { styles } from '../themes/appTheme'


const HomeScreen = () => {
 

    return (
        <View style={{ flex: 1, ...styles.contenedor }}>

            <FlatList 
                data={ menuItems }
                renderItem={ ({item}) => <FlatListMenuItem menuItem={ item } /> }
                keyExtractor={ (item) => item.name }
                ListHeaderComponent={ () => <HeaderTitulo tittle={'Opciones de Menú'} /> }
                ItemSeparatorComponent={ ItemSeparador }
            />
        </View>
    )
}

export default HomeScreen
