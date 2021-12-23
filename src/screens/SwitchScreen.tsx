import React, { useState } from 'react'
import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitulo from '../components/HeaderTitulo';

const SwitchScreen = () => {

    const [state, setstate] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })

    const { isActive, isHappy, isHungry } = state

    const onChange = (value: boolean, field: string) => {
        setstate({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{ marginHorizontal: 20}}>

            <HeaderTitulo tittle={'Switches'} />

            <View style={ styles.switchRow }>
                <Text style={ styles.switchText }>
                    IsActive
                </Text>
                <CustomSwitch isOn={ isActive } onChange={ (value) => onChange( value, 'isActive' )} />
            </View>

            <View style={ styles.switchRow }>
                <Text style={ styles.switchText }>
                    IsHungry
                </Text>
                <CustomSwitch isOn={ isHungry } onChange={ (value) => onChange( value, 'isHungry' )} />
            </View>

            <View style={ styles.switchRow }>
                <Text style={ styles.switchText }>
                    IsHappy
                </Text>
                <CustomSwitch isOn={ isHappy } onChange={ (value) => onChange( value, 'isHappy' )} />
            </View>

            <Text style={ styles.switchText }>
                { JSON.stringify( state, null, 5 ) }
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25,
        color: 'black'
    }
});

export default SwitchScreen
