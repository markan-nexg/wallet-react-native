import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { PropTypes } from 'prop-types';
import QRCodeScannerView from './QRCodeScannerView';
import InputCodeView from './InputCodeView';

const FirstRoute = () => (
  <View style={styles.container}>
    <QRCodeScannerView />
  </View>
);
const SecondRoute = () => (
  <View style={styles.container}>
    <InputCodeView />
  </View>
);

class InputAuthCode extends React.Component {

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'QR코드스캔' },
      { key: '2', title: '코드직접입력' },
    ],
  };

  _renderScene = SceneMap({
    '1': FirstRoute,
    '2': SecondRoute,
  });
  
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width, height }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

InputAuthCode.propTypes = {
  navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default InputAuthCode;