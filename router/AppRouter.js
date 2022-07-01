import { NavigationContainer, useRoute} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/MainScreen'
import TypeScreen from '../screens/TypeScreen'
import PokemonScreen from '../screens/PokemonScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen'
import colors from '../constants/colors'
import LikeBtn from '../components/ui/LikeBtn'

const Stack = createNativeStackNavigator()


export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    animation:'flip',
                    headerStyle: {
                        backgroundColor: colors.secondary
                    },
                    headerTintColor: colors.light,
                    contentStyle: {
                        backgroundColor: colors.light
                    },
                }}
            >
                <Stack.Screen 
                    name='Main' 
                    component={MainScreen} 
                    options={{
                        title: 'HOME',
                    }}/>
                <Stack.Screen 
                    name='Type'
                    component={TypeScreen}
                    options={{
                        title: 'TYPES',
                    }}/>
                <Stack.Screen 
                    name='Pokemon'
                    component={PokemonScreen}
                    options={{
                        title: 'POKE\'S',
                    }}
                />
                <Stack.Screen 
                    name='Detail'
                    component={PokemonDetailScreen}
                    // options={({route, navigation}) => ({
                    //     title: route.params.name.toUpperCase(),
                    //     headerRight: () => <LikeBtn liked={true}/>,
                    // })}                   
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}