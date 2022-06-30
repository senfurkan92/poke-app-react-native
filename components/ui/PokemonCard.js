import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import CardFrame from '../box/CardFrame'
import colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import typeImages from '../../constants/type-images'


export default function PokemonCard({item}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => item.detail && navigation.navigate('Detail', {name: item.name})}>
                <CardFrame bgColor={colors[item.detail ? item.detail.types[0].type.name : 'light']} borderColor={colors.secondary}>
                    <View style={styles.card}>
                        <View style={styles.img_container}>
                            <Image 
                                style={styles.img} 
                                source={{uri: item.detail ? item.detail.sprites.front_default : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToEc1t0OZkFO4vL3KFljBZvRcw9rLmQ3bMpw&usqp=CAU'}} 
                            />
                        </View>
                        <View style={styles.info_container}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: 'pokemon',
                                letterSpacing: 2,
                                color: colors[item.detail ? item.detail.types[0].type.name : 'light']
                            }}>
                                #{item.detail ? item.detail.id : '-'} {item.name.toUpperCase()}
                            </Text>
                            <Text style={{fontSize: 16, fontFamily: 'pasifico'}}>
                                Height: {item.detail ? item.detail.height * 10: '...'} cm
                            </Text>
                            <Text style={{fontSize: 16, fontFamily: 'pasifico'}}>
                                Weight: {item.detail ? item.detail.weight / 10: '...'} kg
                            </Text>
                        </View>
                    </View>
                </CardFrame>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10
    },
    card: {
        flexDirection: 'row',
    },
    img_container: {
        width: 100,
        height: 100,
        marginHorizontal: 5,
        backgroundColor: colors.light,
        borderRadius: 50,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',       
    },
    info_container: {
        backgroundColor: "rgba(256,256,256,0.8)",
        borderRadius: 10,
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 5
    }
})