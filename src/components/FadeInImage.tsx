import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native'
import useAnimation from '../hooks/useAnimation'
import { styles } from '../themes/appTheme'

interface Props {
    uri: string,
    style: StyleProp<ImageStyle>
}

const FadeInImage = ({ uri, style }: Props) => {
    
    const { opacidad, fadeIn } = useAnimation()
    const [isLoading, setIsLoading] = useState(true)

    const finishLoading = () => {
        setIsLoading(false)
        fadeIn()
    }
    
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            {
                isLoading && <ActivityIndicator size={30} color="#5856d6" style={{ position: 'absolute' }} />
            }

            <Animated.Image 
                source={{ uri }}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    opacity: opacidad
                }}
            />
        </View>
    )
}

interface Props {
    uri: string
}

export default FadeInImage
