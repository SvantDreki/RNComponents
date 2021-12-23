import { useRef } from "react"
import { Animated, Easing } from "react-native"

const useAnimation = () => {
    
    const opacidad = useRef( new Animated.Value(0) ).current
    const position = useRef(new Animated.Value(0)).current

    const fadeIn = () => {
        Animated.timing( opacidad, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        } ).start()
    }

    const fadeOut = () => {
        Animated.timing( opacidad, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        } ).start()
    }

    const startMoving = (initPosition: number, duration: number = 300) => {

        position.setValue(initPosition)

        Animated.timing( position, {
            toValue: 0,
            duration,
            useNativeDriver: true,
            //easing: Easing.bounce
        } ).start()
    }

    return {
        fadeIn,
        fadeOut,
        startMoving,
        opacidad,
        position
    }
}

export default useAnimation
