import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    uiContainer: {
        height: '100%',
        justifyContent: 'flex-end'
    },    
    bottomContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    creator: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5
    },
    description: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10
    },
    songRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    songName: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10
    },
    rightContainer: {
        alignSelf: "flex-end",
        height: 300,
        justifyContent: 'space-between',
        marginRight: 5
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    iconContainer: {
        alignItems: 'center'
    },
    statsLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    songImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#000'
    }
});

export default styles;