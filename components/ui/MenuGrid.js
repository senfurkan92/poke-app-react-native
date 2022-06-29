import { Pressable, Text, View, StyleSheet, ImageBackground } from 'react-native'
import CardFrame from '../box/CardFrame'
import colors from '../../constants/colors'

export default function MenuGrid({item, index}){

    const pressStyle = ({pressed}) => ({
        opacity: pressed ? 0.5 : 1,
        transform: [
            {
                scaleY: pressed ? 1.05 : 1
            },
            {
                scaleX: pressed ? 1.05 : 1
            }
        ]
    })

    return (
        <View style={[styles.container, {
            transform: [
                {
                    rotateZ: index%2 ? "-1deg" : "1deg"
                },
            ]
        }]}>   
            <ImageBackground source={item.imgSrc} imageStyle={{opacity: 0.2}} resizeMode="contain">
                <Pressable style={pressStyle} onPress={item.onPress}>
                    <CardFrame>
                        <View style={styles.card_inner}>
                            <Text style={styles.txt}>{item.name}</Text>
                        </View>
                    </CardFrame>
                </Pressable>  
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      margin: 10,
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    txt: {
        fontFamily: 'pasifico',
        color: colors.primary,
        fontSize: 22
    },
    card_inner: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_img: {

    }
})
