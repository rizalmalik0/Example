import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    ScrollView,
    Text
} from 'react-native';

import AlbumList from "./AlbumList";
import { Header, Button } from './Component/common';

class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerName="Albums" />
                <AlbumList />
            </View>
        );
    }
}

export default App;
