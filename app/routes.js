import { createStackNavigator } from 'react-navigation';
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
 
const AppNavigator = createStackNavigator({
  Home: { screen: Home, params: { title: 'Test' },  navigationOptions: {title: `Test`} },
  InputAuthCode: { screen: InputAuthCode,  navigationOptions: {title: `기기인증코드 입력`} },

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