import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    ScrollView,
    Text
} from 'react-native';

import AlbumList from "./AlbumList";
import { Header } from './Component/common';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerName="Albums" />
            <AlbumList />
        </View>
    );
}

export default App;
