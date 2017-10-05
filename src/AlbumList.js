import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './Component/AlbumDetail';
import { Button, Spinner } from './Component/common';

export default class Album extends Component {
    constructor(props) {
        super(props);

        this.state = { albums: [], loading: true };
    }

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data, loading: false }))
            .catch(console.log('error'));
    }

    loadFromPromise() {
        this.setState({ albums: [], loading: true });
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data, loading: false }))
            .catch(console.log('error'));
    }

    createPromise() {
        return new Promise(
            resolve => {
                setTimeout(() => resolve('test'), 2000);
            });
    }

    async loadFromAsync() {
        this.setState({ albums: [], loading: true });

        try {
            const promise = await this.createPromise();
            console.log(promise); // ☕
            const response = await axios('http://rallycoding.herokuapp.com/api/music_albums');
            this.setState({ albums: response.data, loading: false });
        } catch (e) {
            console.error(e);
        }
    }

    showAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }

    renderContent() {
        if (this.state.loading) {
            return (<Spinner />);
        }

        return (
            <ScrollView>
                {this.showAlbums()}
            </ScrollView>
        );
    }

    render() {
        console.log(this.state);

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}>
                    <Button onPress={this.loadFromPromise.bind(this)}>Promise</Button>
                    <Button onPress={this.loadFromAsync.bind(this)}>Async</Button>
                </View>
                {this.renderContent()}
            </View>
        );
    }
}
