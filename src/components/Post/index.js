import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = () => {
    const [paused, setPaused] = useState(false);
    const onPlayPausePress = () => {
        setPaused(!paused);
    }
    const tiktok = require('../../assets/tiktok.mp4');
    const pp = require('../../assets/images/pp.png');
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video source={tiktok} style={styles.video} resizeMode={'cover'} onError={(e) => console.log(e)} repeat={true} paused={paused} />
            </TouchableWithoutFeedback>            
            <View style={styles.uiContainer}>
                <View style={styles.rightContainer}>
                    <Image style={styles.profilePicture} source={pp} />
                    <View style={styles.iconContainer}>
                        <AntDesign name={'heart'} size={40} color={'white'} />
                        <Text style={styles.statsLabel}>237</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <FontAwesome name={'commenting'} size={40} color={'white'} />
                        <Text style={styles.statsLabel}>237</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Fontisto name={'share-a'} size={35} color={'white'} />
                        <Text style={styles.statsLabel}>237</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View>
                        <Text style={styles.creator}>@algorithme.cm</Text>
                        <Text style={styles.description}>On construit TikTok de A à Z</Text>
                        <View style={styles.songRow}>
                            <Entypo name={'beamed-note'} size={18} color={'white'} />
                            <Text style={styles.songName}>son original - algorithme.cm</Text>
                        </View>
                    </View>
                    <Image style={styles.songImage} source={pp} />
                </View>  
            </View>
        </View>
    )
}

export default Post;