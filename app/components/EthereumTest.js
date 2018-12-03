import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Container from '../containers/Container';
import { API_URL, user } from '../test'
import "../shim";
import bitcoin from "rn-bitcoinjs-lib"; // https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/test/integration/bip32.js#L55
import bip39 from 'bip39';
import bip32 from 'bip32';

export default class EthereumTest extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    publicKey: '',
    secretKey: '',
    sign: '',
    error: '',
    mnemonic: '',
    address: '',
    walletId: '',
  }

  // 지갑 생성
  _createWalletRequest = () => {
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      'x-access-token': `${user.token}`,
    }
    const data = {
      label: '지갑이름',
      xPubKey: this.state.publicKey,
      network: 'testnet',
      sign: 'S',
    };
    fetch(API_URL + '/v1/eth/wallet/create', {
      headers,
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({
        walletId: res.walletId,
        address: res.address,
      })
    })
    .catch(err => console.log(err));
  }

  _createKeys = () => {
    console.log('createKeys')
    // 키쌍 생성
    try {
      // 1. 니모닉
      const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';

      // 2. 시드 생성
      const seed = bip39.mnemonicToSeed(mnemonic);

      // 3. 마스터 키 생성
      const root = bip32.fromSeed(seed); 

      // 4. 비트코인 키쌍 생성
      const path = "m/44'/60'/0'"
      const keyPair = root.derivePath(path);

      let xPubKey = keyPair.neutered().toBase58();
      console.log('xPubKey,:', xPubKey);

      this.setState({
        publicKey: xPubKey,
        secretKey: keyPair.privateKey,
      });
    } catch (error) {
      console.log('error:', error);
    }
  }

  _sign = () => {
    console.log('sign');
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <View style={{padding:20}}>
          <Button style={styles.mt20}
            title="키 생성"
            onPress={this._createKeys}
          />
          <Button style={styles.mt20}
            title="지갑 생성 요청"
            onPress={this._createWalletRequest}
          />
        </View>

        {/* 결과 */}
        <View style={styles.result}>
          <Text>publicKey: {this.state.publicKey}</Text>
          <Text>secretKey: {this.state.secretKey}</Text>
          <Text>sign: {this.state.sign}</Text>
          <Text>walletId: {this.state.walletId}</Text>
          <Text>address: {this.state.address}</Text>
          {/*<Text>error: {this.state.error}</Text>*/}
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  spacer: {
    height: 20
  },
  result: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  mt20: {
    marginTop: 20
  }
});