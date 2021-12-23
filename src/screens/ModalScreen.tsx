import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import HeaderTitulo from '../components/HeaderTitulo'
import { styles } from '../themes/appTheme'

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)

    
    return (
        <View style={ styles.contenedor }>
            <HeaderTitulo tittle="Modal" />

            <Button 
                title="Abrir modal"
                onPress={ () => setIsVisible(!isVisible) }
            />

            <Modal
                animationType="fade"
                visible={ isVisible }
                transparent={true}
            >
                <View style={ stylesModal.fondoModal }>
                    <View style={ stylesModal.modalCuerpo }>
                        <Text style={ stylesModal.modalTitulo }>Titulo Modal</Text>
                        <Text style={ stylesModal.modalTexto }>Texto Del Modal</Text>
                        <Button 
                            title="Cerrar Modal"
                            onPress={ () => setIsVisible(!isVisible) }
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const stylesModal = StyleSheet.create({
    fondoModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCuerpo: {
        backgroundColor: 'white',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        elevation: 10 //android
    },
    modalTitulo: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    modalTexto: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10
    }
});

export default ModalScreen
