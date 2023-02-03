import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icons from "../../assets/Icons"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={Icons.menu.dark} style={styles.icons}/>
            <Text style={styles.headerText}>ensom</Text>
            <Image source={Icons.moon} style={styles.icons}/>
        </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "Sydney-Bold",
        fontSize: 32,
        color: "#fff",
        margin: windowWidth * 0.1,
    },
    icons: {
        height: windowHeight * 0.05, 
        width: windowHeight * 0.05,
        margin: windowWidth * 0.1,
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});
export default Header;