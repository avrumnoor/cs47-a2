import { View, Text, Image, StyleSheet, Dimensions, PixelRatio} from "react-native";
import Icons from "../../assets/Icons";
import themes from "../../assets/Themes/themes";

const { height, width } = Dimensions.get('window');

const Audio = () =>{
    return (
        <View style={styles.audio}>
            <Text style={{fontSize: 20, color: '#fff', fontFamily: 'Sydney', marginLeft: 5, marginTop: 10}}>My hottest take</Text>
            <View style={styles.audioView}>
                <Image source={Icons.player.dark} style={styles.player}/>
                <Image source={Icons.audioWave.dark} style={styles.audioWave}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    audio: {
        backgroundColor: themes.dark.bgSecondary,
        borderRadius: 10,
        flex: 1,
        width: width * 0.8,
        flexDirection: "column",
        marginBottom: height * 0.15,
    },
    audioView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: height * 0.05,
    },
    audioWave: {
        height: height * 0.05, 
        width: width * 0.6,
        margin: width * 0.02,
    },
    player: {
        height: height * 0.05, 
        width: height * 0.05,
        margin: width * 0.02,
    },
});

export default Audio;
