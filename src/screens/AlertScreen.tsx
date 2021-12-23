import React from 'react'
import { Alert, Button, View } from 'react-native'

import prompt from 'react-native-prompt-android'

import HeaderTitulo from '../components/HeaderTitulo'
import { styles } from '../themes/appTheme'

const AlertScreen = () => {
    
    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Mensaje alerta",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ], {
                cancelable: true
            }
        )
    }

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        )
    }
    
    return (
        <View style={ styles.contenedor }>
            <HeaderTitulo tittle={'Alerts'} />

            <Button 
                title="Mostrar Alerta"
                onPress={ showAlert }
            />

            <View style={{ height: 10 }} />

            <Button 
                title="Mostrar Prompt"
                onPress={ showPrompt }
            />

        </View>
    )
}

export default AlertScreen
