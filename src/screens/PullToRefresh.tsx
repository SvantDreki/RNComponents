import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeaderTitulo from '../components/HeaderTitulo'
import { styles } from '../themes/appTheme'

const PullToRefresh = () => {

    const { top } = useSafeAreaInsets()

    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = () => {
        setRefreshing(true)

        setTimeout(() => {
            console.log('Terminamos')
            setRefreshing(false)
        }, 1500)
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl 
                    refreshing={ refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={10}
                    progressBackgroundColor="#5856d6"
                    colors={['white', 'red', 'orange']}
                    //style={{ backgroundColor: '#5856d6' }} IOS
                    //tintColor="white" IOS
                />
            }
        >
            <View style={ styles.contenedor }>
                <HeaderTitulo tittle={'Pull To Refresh'} />
            </View>
        </ScrollView>
    )
}

export default PullToRefresh
