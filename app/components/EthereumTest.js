import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Container from '../containers/Container';
import StellarSdk from '@pigzbe/react-native-stellar-sdk';

export default class EthereumTest extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    publicKey: 'GA3AV7UWIFDDCKF3JAH6YBQRU64LPZCJ7NUS4VB2KFN32JW6ALG5ARRR',
    secretKey: 'SCTM7VPKP33V7TINSQG6C2OSIANZDVUJW2TC7NTDYXZKJHMRSVAZ7H3X',
    sign: '',
    error: '',
  }

  _createKeys = async () => {
    // 스텔라 키쌍 생성
    try {
      const keypair = await StellarSdk.Keypair.randomAsync();
      const publicKey = keypair.publicKey();
      const secretKey = keypair.secret();
      console.log(publicKey, secretKey);
      this.setState({
        publicKey,
        secretKey
      });
    } catch (error) {
      this.setState({
        error
      })
    }
  }

  _sign = () => {
    console.log('sign');
    StellarSdk.Network.useTestNetwork();
    const StellarServer = new StellarSdk.Server('https://horizon-testnet.stellar.org');
    const sourceKeys = StellarSdk.Keypair.fromSecret(this.state.secretKey);
    console.log('sourceKeys:', sourceKeys);
    console.log('publicKey:', sourceKeys.publicKey());
    StellarServer
      .loadAccount(sourceKeys.publicKey())
      .catch(error => {
        console.log('error', error);
        this.setState({
          error
        })
      })
      .then(sourceAccount => {     
        console.log('sourceAccount:', sourceAccount);
        let transaction = new StellarSdk.TransactionBuilder(sourceAccount)       
          .addOperation(StellarSdk.Operation.payment({
            destination: this.state.publicKey,
            asset: StellarSdk.Asset.native(),         
            amount: String(0.1)   
          }))
          .addMemo(StellarSdk.Memo.text('test'))       
          .build();
        transaction.sign(sourceKeys);
        // .toEnvelope().toXDR('base64');
        const sign = transaction.toEnvelope().toXDR('base64');
        this.setState({
          sign
        })
      }).catch(error => {
        console.log('error', error);
        this.setState({
          error
        })
      });
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