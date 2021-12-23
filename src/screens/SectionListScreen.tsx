import React from 'react'
import { SectionList, Text, View } from 'react-native'
import HeaderTitulo from '../components/HeaderTitulo'
import ItemSeparador from '../components/ItemSeparador';
import { styles } from '../themes/appTheme'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin",]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman",]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama",]
    }
];

const SectionListScreen = () => {
    return (
        <View style={ {...styles.contenedor, flex: 1} }>
            {/*<HeaderTitulo tittle={'Section List'} />*/}

            <SectionList
                sections={ casas }
                keyExtractor={ (item, index) => item + index }
                ListHeaderComponent={ () => <HeaderTitulo tittle="Section List" /> }
                ListFooterComponent={ () => (
                    <View style={{ marginBottom: 70 }}>
                        <HeaderTitulo tittle={'Total de Casas: ' + casas.length} />
                    </View>
                ) }
                renderItem={ ({ item }) => <Text style={{ color: 'black', fontSize: 18 }}>{item}</Text> }
                stickySectionHeadersEnabled={ true } // android
                renderSectionHeader={ ({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <HeaderTitulo tittle={section.casa} />
                    </View>
                ) }
                renderSectionFooter={ ({ section }) => (
                    <HeaderTitulo tittle={ 'Total:' + section.data.length } />
                ) }
                SectionSeparatorComponent={ () => <ItemSeparador /> }
                ItemSeparatorComponent={ () => <ItemSeparador /> }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SectionListScreen
