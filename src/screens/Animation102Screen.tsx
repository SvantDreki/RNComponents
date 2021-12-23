import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native';

const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current

    const panRespuesta = PanResponder.create({
        onMoveShouldSetPanResponder: () =>  true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: pan.x,
                dy: pan.y
            }
        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                pan, 
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }
            ).start()
        }
    })

    return (
        <View style={ styles.container }>
            <Animated.View
                {...panRespuesta.panHandlers} 
                style={ [ pan.getLayout(), styles.cajaMorada] }
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
        backgroundColor: 'red',
        width: 150,
        height: 150
    }

});

export default Animation102Screen