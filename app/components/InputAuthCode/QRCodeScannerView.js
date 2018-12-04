import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Container from '../../containers/Container';
import { API_URL } from '../../test'

export default class QRCodeScannerView extends React.Component {

  // QR코드 촬영 -> 코드로 릴레이 서버에서 암호화된 데이터 조회
  _getUserInfo(code) {
    /*
    console.log('_getUserInfo: ', API_URL + '/test/qrcode?code=' + code);
    return fetch(API_URL + '/test/qrcode?code=' + code)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      // alert(JSON.stringify(ree));
      return res;
    })
    // .catch(err => console.log(err));
    */
  }

  _onSuccess(e) {
    /*
    console.log(`success:`, e);
    alert(JSON.stringify(e));

    this._getUserInfo('123456')
    .then(res => {
      alert(JSON.stringify(res))
      this.props.navigation.navigate('InputSMSCode', res);
    })
    .catch(err => console.log(err));
    */
  }

  render() {
    // const { navigate, state  } = this.props.navigation;
    console.log('QRCodeScannerView[props]', this.props);
    console.log('QRCodeScannerView[state]', this.state);

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