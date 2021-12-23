import React, { useState } from 'react'
import { ImageSourcePropType, View, SafeAreaView, Text, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import HeaderTitulo from '../components/HeaderTitulo'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Ionicons'
import useAnimation from '../hooks/useAnimation'
import { StackScreenProps } from '@react-navigation/stack'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

interface Props extends StackScreenProps<any, any>{}

const SlidesScreen = ({ navigation }: Props ) => {

    const [activeIndex, setActiveIndex] = useState(0)
    const { opacidad, fadeIn, fadeOut } = useAnimation();

    const renderItem = ( item: Slide ) => (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}
        >
            <Image
                source={ item.img }
                style={{
                    width: 350,
                    height: 400,
                    resizeMode: 'center'
                }}
            />
            <Text style={ styles.title } >{item.title}</Text>
            <Text style={ styles.desc } >{item.desc}</Text>
        </View>
    )

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50,
                backgroundColor: '#5856d6'
            }}
        >
            <HeaderTitulo tittle="Slides Screen" />

            <Carousel
              //ref={(c) => { this._carousel = c; }}
              data={ items }
              renderItem={({ item }) => renderItem( item )}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              onSnapToItem={ (index) => {
                    setActiveIndex(index)
                    if( index === 2 ) {
                        fadeIn()
                    } else {
                        fadeOut()
                    }
              } }
            />
            
            <View style={ styles.rowPaginacion }>
                <Pagination
                    dotsLength={ items.length }
                    activeDotIndex={ activeIndex }
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: 'white'
                    }}
                />

                <Animated.View
                    style={{
                        opacity: opacidad
                    }}
                >
                    <TouchableOpacity 
                        style={ styles.btnNext } 
                        activeOpacity={0.7}
                        onPress={ () => {
                            if( activeIndex === 2 ) {
                                navigation.navigate('HomeScreen')
                            }
                        } }
                    >
                        <Text style={ styles.textBtn }>
                            Siguente
                        </Text>
                        <Icon
                            name="chevron-forward-outline"
                            color="white"
                            size={40}
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856d6'
    },
    desc: {
        fontSize: 18,
        color: 'black'
    },
    btnNext: {
        flexDirection: 'row',
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5856d6'
    },
    textBtn: {
        fontSize: 20,
        color: 'white'
    },
    rowPaginacion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center'
    }

});

export default SlidesScreen
