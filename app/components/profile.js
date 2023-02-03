import { View, Text, ImageBackground, StyleSheet, Dimensions, PixelRatio} from "react-native";
import Profiles from "../../assets/Profiles"
import Icons from "../../assets/Icons"
import Audio from "./audio"

const { height, width } = Dimensions.get('window');

const Profile = () =>{
    return (
        <View style={styles.profile}>
            <ImageBackground source={Profiles.mtl.image} style={styles.background} imageStyle={styles.profileImage}>
                {/* <View style={{position: 'absolute', top: "5%", left: "5%", right: 0, bottom: 0}}> */}
                    <Text style={{fontSize: 32, color: '#fff', fontFamily: 'Sydney'}}>{Profiles.mtl.name}</Text>
                    <Text style={{fontSize: 32, color: '#fff', fontFamily: 'Sydney'}}>{Profiles.mtl.caption}</Text>
                {/* </View> */}
            </ImageBackground>
            <Audio/>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        margin: height * 0.01,
        height: undefined,
        width: width * 0.8,
        aspectRatio: 1/1.1,
        justifyContent: "space-between",
        shadowProp: Themes.dark.shadows,
    },
    profileImage: {
        // width: "100%",
        // height: undefined,
        // aspectRatio: 1/1.1,
        borderRadius: 10,
    },
    profile: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default Profile;