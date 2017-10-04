import React from 'react';
import {
    Text,
    View,
    Image,
    Linking
} from 'react-native';

import { Card, CardItem, Button } from './common';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, thumbnailContainerStyle, headerContainerStyle, imageStyle } = styles;

    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}></Image>
                </View>
                <View style={headerContainerStyle}>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
            <CardItem>
                <Image style={imageStyle}
                    source={{ uri: image }} />
            </CardItem>
            <CardItem>
                <Button onPress={() => Linking.openURL(url)} >
                    Buy Now!
                </Button>
            </CardItem>
        </Card>
    );
}

const styles = {
    headerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
}

export default AlbumDetail;
