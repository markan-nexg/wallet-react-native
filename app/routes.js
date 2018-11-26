import { createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import BarcodeScanner from './components/BarcodeScanner';
import Wallets from './components/Wallets';
import StellarTest from './components/StellarTest';
 
const AppNavigator = createStackNavigator({
  Home: { screen: Home, params: { title: 'Test' },  navigationOptions: {title: `Test`} },
  BarcodeScanner: { screen: BarcodeScanner, params: { title: '바코드' },  navigationOptions: {title: `Barcode`} },
  Wallets: { screen: Wallets, params: { title: '지갑' },  navigationOptions: { /* header: null */ } },
  StellarTest: { screen: StellarTest ,  navigationOptions: { title: 'StellarTest' } },
}, {
  // headerMode: 'none',
});

export default AppNavigator;