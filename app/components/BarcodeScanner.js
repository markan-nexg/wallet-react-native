import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Container from '../containers/Container';

export default class BarcodeScanner extends React.Component {

  // static navigationOptions = {
  //   title: 'BarcodeScanner',
  // };

  state = {
    // hasCameraPermission: null,    
    // width: 400,
    // height:400,    
  };

  _onSuccess(e) {
    console.log(e);
    // 화면 이동
    // this.props.navigation.navigate('Wallets');
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  render() {
    const { navigate, state  } = this.props.navigation;

    return (
      <Container>
        <QRCodeScanner
          onRead={this._onSuccess.bind(this)}
          topContent={
            <Text  style={styles.text}>QR코드</Text>
          }
          bottomContent={
            <TouchableOpacity>
              <Text style={styles.text}>Talken > 지갑 > 앱설치 및 코드입력 페이지에 보이는 QR코드를 스캔해 주세요.</Text>
            </TouchableOpacity>
          }
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'white',
    padding: 10,
  }
});