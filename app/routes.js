import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { graphql, ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import Home from './components/Home';
import InputAuthCode from './components/InputAuthCode';
import BarcodeScanner from './components/BarcodeScanner';
import Wallets from './components/Wallets';
import InputCode from './components/InputCode';
import StellarTest from './components/StellarTest';
import BitcoinTest from './components/BitcoinTest';
import EthereumTest from './components/EthereumTest';
import InputSMSCode from './components/InputSMSCode';
import SuccessDeviceAuth from './components/SuccessDeviceAuth';
import CreateWallets from './components/CreateWallets';

// Create the client as outlined in the setup guide
const networkInterface = createNetworkInterface({uri: 'http://52.79.242.88:3888/graphql'});
const client = new ApolloClient({
  networkInterface
});

function ApolloWrapper(CMP) {
  return class extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <CMP {...this.props}/>
        </ApolloProvider>
      );
    }
  };
}
 
const AppNavigator = createStackNavigator({
  Home: { screen: Home, params: { title: 'Test' },  navigationOptions: {title: `Test`} },
  InputAuthCode: { screen: ApolloWrapper(InputAuthCode) }, // 기기인증코드 입력

  BarcodeScanner: { screen: BarcodeScanner, params: { title: '바코드' },  navigationOptions: {title: `Barcode`} },
  InputCode: { screen: InputCode,  navigationOptions: {title: `코드 입력`} },
  Wallets: { screen: Wallets, params: { title: '지갑' },  navigationOptions: { /* header: null */ } },
  StellarTest: { screen: StellarTest ,  navigationOptions: { title: 'StellarTest' } },
  BitcoinTest: { screen: BitcoinTest ,  navigationOptions: { title: 'BitcoinTest' } },
  EthereumTest: { screen: EthereumTest ,  navigationOptions: { title: 'EthereumTest' } },

  InputSMSCode: { screen: InputSMSCode ,  navigationOptions: { title: 'InputSMSCode' } },
  SuccessDeviceAuth: { screen: SuccessDeviceAuth ,  navigationOptions: { title: 'SuccessDeviceAuth' } },
  CreateWallets: { screen: CreateWallets ,  navigationOptions: { title: '지갑 만들기' } },
}, {
}, {
  // headerMode: 'none',
});

export default AppNavigator;