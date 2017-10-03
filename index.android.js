/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Alert,
  Button,
  TextInput,
  Image,
  Icon,
  View
} from 'react-native';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <Image source={require('./images/background.jpg')}
        style={styles.container}>
        <View style={styles.content} elevation={5}>
          <Text style={styles.welcome}>
            Login
          </Text>
          <TextInput style={styles.inputText}
            onChangeText={(text) => this.setState({ username: text })}
            placeholder="Username"
            value={this.state.text}
          />
          <TextInput style={styles.inputText}
            onChangeText={(text) => this.setState({ password: text })}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.text}
          />
          <View style={styles.btnSubmit}>
            <Button
              onPress={this._testSubmit.bind(this)}
              title="Submit" />
          </View>
        </View>
      </Image>
    );
  }

  _testSubmit() {
    Alert.alert("Submit", "Username : " + this.state.username + "\nPassword : " + this.state.password);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: undefined,
    height: undefined,
  },
  content: {
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputText: {
    height: 40,
    alignSelf: 'stretch',
  },
  btnSubmit: {
    marginTop: 10,
    alignSelf: 'stretch',
  }
});

AppRegistry.registerComponent('Example', () => Example);
