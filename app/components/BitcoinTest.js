import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Container from '../containers/Container';

import "../shim";
import bitcoin from "rn-bitcoinjs-lib"; // https://github.com/bitcoinjs/bitcoinjs-lib/blob/master/test/integration/bip32.js#L55
import bip39 from 'bip39';
import bip32 from 'bip32';

export default class BitcoinTest extends Component {

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
    address: ''
  }

  getAddress = (node, network) => {
    return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address
  }

  _createKeys = async () => {
    // 비트코인 키쌍 생성
    try {
      const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about';
      const seed = bip39.mnemonicToSeed(mnemonic);
      const root = bip32.fromSeed(seed); // 마스터 키
      const path = "m/49'/1'/0'/0/0"
      const keyPair = root.derivePath(path);
      const { address } = bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: bitcoin.networks.testnet }),
        network: bitcoin.networks.testnet
      });
      console.log('address', address);

      /*
      const keyPair = bitcoin.ECPair.makeRandom();
      const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
      console.log('address', address);
      */
      this.setState({
        publicKey: keyPair.publicKey,
        secretKey: keyPair.privateKey,
      });
    } catch (error) {
      this.setState({
        error
      })
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
          <Text>스텔라 테스트</Text>
          <View style={styles.spacer}/>
          <Button
            title="키 생성"
            onPress={this._createKeys}
          />
          <View style={styles.spacer}/>
          <Button
            title="서명"
            onPress={this._sign}
          />
        </View>

        {/* 결과 */}
        <View style={styles.result}>
          <Text>publicKey: {this.state.publicKey}</Text>
          <Text>secretKey: {this.state.secretKey}</Text>
          <Text>sign: {this.state.sign}</Text>
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
  }
});