import { View, TouchableHighlight, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native'
import colors from '../../../constants/colors'
import { LinearGradient } from 'expo-linear-gradient'

export default function HorizontalSlider({uri, types}) {
    let bgColors = types.map(x => colors[x] + '99')
    bgColors = bgColors.length == 1 ? [bgColors[0],bgColors[0]] : bgColors

    return (  
        <TouchableHighlight>
            <LinearGradient colors={bgColors}>
                <View style={styles.img_container}>
                    <Image style={styles.img} source={{uri}} resizeMode="contain"/>
                </View>
            </LinearGradient>
        </TouchableHighlight>        
    )
}

const styles = StyleSheet.create({
    img_container: {
        width: Dimensions.get('screen').width,
        aspectRatio: 1,
        padding: 10,
    },
    img: {
        height: '100%',
        width: '100%',
    }
})
