import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Container from '../../containers/Container';

// https://github.com/moaazsidat/react-native-qrcode-scanner
class QRCodeScannerView extends React.Component {

  // QR코드 인식 성공
  _onSuccess(e) {
    console.log(`success:`, e);
    alert(JSON.stringify(e));
    this.props.next('123456');
  }

  render() {
    // const { navigate, state  } = this.props.navigation;

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

QRCodeScannerView.propTypes = {
  next: PropTypes.func.isRequired,
};

export default QRCodeScannerView;