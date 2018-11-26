import React, {Component} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { createNavigationContainer, createStackNavigator } from 'react-navigation';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';

import StellarSdk from '@pigzbe/react-native-stellar-sdk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    publicKey: null,
    secretKey: null,
  }

  componentDidMount() {
    // 스텔라 키쌍 생성
    const keypair = StellarSdk.Keypair.randomAsync().then(keypair => {
      const publicKey = keypair.publicKey();
      const secretKey = keypair.secret();
      console.log(publicKey, secretKey);
      this.setState({
        publicKey,
        secretKey
      })
  });
  }

  _onSuccess(e) {
    console.log(e);  
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  render() {
    const { publicKey, secretKey } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.instructions}>{publicKey}</Text>
        <Text style={styles.instructions}>{secretKey}</Text>
        <QRCodeScanner
          onRead={this._onSuccess.bind(this)}
          topContent={
            <Text></Text>
          }
          bottomContent={
            <TouchableOpacity>
              <Text>Talken > 지갑 > 앱설치 및 코드입력 페이지에 보이는 QR코드를 스캔해 주세요.</Text>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});