import {Text, View, FlatList} from 'react-native'
import MenuGrid from '../components/ui/MenuGrid'

export default function MainScreen ({navigation}) {

    const menu = [
        {
            name: 'Type',
            onPress: () => navigation.navigate('Type'),
            imgSrc: require('../assets/type_imgs/fire.png')
        },
        {
            name: 'Pokemon',
            onPress: () => navigation.navigate('Pokemon'),
            imgSrc: require('../assets/type_imgs/pikachu.png')
        },
        {
            name: 'Evolution',
            onPress: () => navigation.navigate('Type'),
            imgSrc: require('../assets/type_imgs/evolution.jpg')
        },
        {
            name: 'Locations',
            onPress: () => navigation.navigate('Type'),
            imgSrc: require('../assets/type_imgs/location.jpg')
        },
        {
            name: 'Contests',
            onPress: () => navigation.navigate('Type'),
            imgSrc: require('../assets/type_imgs/contest.jpg')
        },
        {
            name: 'Items',
            onPress: () => navigation.navigate('Type'),
            imgSrc: require('../assets/type_imgs/items.png')
        },
    ]


    return (
        <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
            <FlatList
                data={menu}
                renderItem={({item, index}) => <MenuGrid item={item} index={index}/>}
                keyExtractor={(item, index) => index}
                numColumns={2}
            />
        </View>
    )
}