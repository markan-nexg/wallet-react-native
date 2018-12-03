import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import BarcodeScanner from './components/BarcodeScanner';
import Wallets from './components/Wallets';
import InputCode from './components/InputCode';
import StellarTest from './components/StellarTest';
import BitcoinTest from './components/BitcoinTest';
import EthereumTest from './components/EthereumTest';
 
const AppNavigator = createStackNavigator({
  Home: { screen: Home, params: { title: 'Test' },  navigationOptions: {title: `Test`} },
  BarcodeScanner: { screen: BarcodeScanner, params: { title: '바코드' },  navigationOptions: {title: `Barcode`} },
  InputCode: { screen: InputCode,  navigationOptions: {title: `코드 입력`} },
  Wallets: { screen: Wallets, params: { title: '지갑' },  navigationOptions: { /* header: null */ } },
  StellarTest: { screen: StellarTest ,  navigationOptions: { title: 'StellarTest' } },
  BitcoinTest: { screen: BitcoinTest ,  navigationOptions: { title: 'BitcoinTest' } },
  EthereumTest: { screen: EthereumTest ,  navigationOptions: { title: 'EthereumTest' } },
}, {
}, {
  // headerMode: 'none',
});

export default AppNavigator;