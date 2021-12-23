import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import useAnimation from '../hooks/useAnimation'

const Animation101Screen = () => {

    const { fadeIn, fadeOut, startMoving, opacidad, position } = useAnimation()

    return (
        <View style={ styles.container } >
            < Animated.View style={{ 
                ...styles.cajaMorada,
                opacity : opacidad,
                marginBottom: 20,
                transform: [{
                    translateY: position
                }]
            } } />

            <Button
                title="FadeIn"
                onPress={ () => {
                    fadeIn()
                    startMoving(-100, 800)
                } }
            />

            <Button
                title="FadeOut"
                onPress={ fadeOut }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150
    }

});

export default Animation101Screen
