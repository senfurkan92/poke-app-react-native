import { View, Pressable, Text, Image, StyleSheet } from 'react-native'
import CardFrame from '../box/CardFrame'
import colors from '../../constants/colors'
import typeImages from '../../constants/type-images'

export default function TypeCard({type}) {
    const pressEffect = ({pressed})=> {
        return {
            opacity: pressed ? 0.5 : 1
        }
    }

    return (
        <View style={[styles.container]}>
            <Pressable android_ripple={{color: colors[type.name]}} style={pressEffect}>
                <CardFrame bgColor={colors[type.name]}>    
                        <View style={styles.flex_container}>
                            <View style={styles.img_container}>
                                <Image source={typeImages[type.name]} style={styles.img}></Image>
                            </View>
                            <View style={styles.text_container}>
                                <Text style={styles.txt}>
                                    {type.name.toUpperCase()}
                                </Text> 
                            </View>
                        </View>
                </CardFrame>  
            </Pressable>     
        </View>
    )
}

const styles = StyleSheet.create({
    flex_container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'center'
    },
    img_container: {
        height: 100,
        width: 100,
        overflow: 'hidden',
        marginRight: 20,
        borderRadius: 50
    },
    text_container: {
        flexGrow: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(256,256,256,0.5)',
        borderRadius: 5,
    },
    img: {
        height: '100%',
        aspectRatio: 1
    },
    txt: {
        fontFamily: 'pasifico'
    },  
    subcontainer: {
        overflow: 'hidden',
    },
    container: {
        margin: 10,
        overflow: 'hidden',
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    } 
})