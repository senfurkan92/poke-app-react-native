import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainScreen from '../screens/MainScreen'
import TypeScreen from '../screens/TypeScreen'
import PokemonScreen from '../screens/PokemonScreen'
import PokemonDetailScreen from '../screens/PokemonDetailScreen'

const Stack = createNativeStackNavigator()


export default function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={MainScreen}/>
                <Stack.Screen name='Type' component={TypeScreen}/>
                <Stack.Screen name='Pokemon' component={PokemonScreen}/>
                <Stack.Screen name='Detail' component={PokemonDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}