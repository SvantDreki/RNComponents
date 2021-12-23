import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import CustomSwitch from '../components/CustomSwitch'
import HeaderTitulo from '../components/HeaderTitulo'
import useForm from '../hooks/useForm'
import { styles } from '../themes/appTheme'

const TextInputScreen = () => {

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSubscribed: false
    })


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <View style={ styles.contenedor }>
                    <HeaderTitulo tittle={'TextInputs'} />

                    <TextInput
                        style={ stylesText.textInputStyle }
                        placeholder="Ingresa tu nombre"
                        autoCorrect={ false }
                        autoCapitalize="words"
                        onChangeText={ value => onChange(value, 'name') }
                    />

                    <TextInput
                        style={ stylesText.textInputStyle }
                        placeholder="Ingresa tu email"
                        autoCorrect={ false }
                        autoCapitalize="none"
                        onChangeText={ value => onChange(value, 'email') }
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                    />

                    <TextInput
                        style={ stylesText.textInputStyle }
                        placeholder="Ingresa tu celular"
                        onChangeText={ value => onChange(value, 'phone') }
                        keyboardType="phone-pad"
                    />

                <View style={ stylesText.switchRow }>
                    <Text style={ stylesText.switchText }>
                        Suscribirse
                    </Text>
                    <CustomSwitch isOn={ isSubscribed } onChange={ (value) => onChange( value, 'isSubscribed' )} />
                </View>

                    <HeaderTitulo tittle={JSON.stringify(form, null, 3)} />
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const stylesText = StyleSheet.create({
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.8)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 25,
        marginVertical: 10
    },
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

export default TextInputScreen
