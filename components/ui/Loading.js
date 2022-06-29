import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../constants/colors";

export default function Loading() {
    return (
        <View style={styles.container}>         
            <LottieView source={require('../../assets/99947-loader.json')} autoPlay loop style={{backgroundColor: '#fff'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
    },
})
