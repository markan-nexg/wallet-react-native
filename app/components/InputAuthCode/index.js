import * as React from 'react';
import { View, StyleSheet, Dimensions, Alert } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { PropTypes } from 'prop-types';
import QRCodeScannerView from './QRCodeScannerView';
import InputCodeView from './InputCodeView';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';
import { API_URL } from '../../test'

const GET_CONTENTS = gql`
  mutation getContents($transId: String!) {
    getContents(message: { transId: $transId, , userId: "0000" }) {
      transId
      status
      msgType
      msgContents
    }
  }
`;

// https://github.com/react-native-community/react-native-tab-view/tree/v0.0.67
class InputAuthCode extends React.Component {

  static navigationOptions = {
    title: '기기인증코드 입력',
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'QR코드스캔' },
      { key: '2', title: '코드직접입력' },
    ],
  };

  // QR코드 촬영 -> 코드로 릴레이 서버에서 암호화된 데이터 조회
  _getUserInfo(code) {
    console.log(this.props);
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

  //  this._getUserInfo('123456')
  //  .then(res => {
  //    alert(JSON.stringify(res))
  //    this.props.navigation.navigate('InputSMSCode', res);
  //  })
  //  .catch(err => console.log(err));
  }

  _requestAuthInfo = (code) => {
    // console.log(this.props.mutate);
    console.log('_next', code);
    // this.props.mutate({ variables: { 
    //   transId: code
    // }}, ({ loading, data, error }) => {
    //   console.log(loading, data, error);
    // });
    this.props.mutate({ 
      variables: { transId: code }
    })
    .then(({ data }) => {
      console.log(data.getContents);
      const { msgContents } = data.getContents;
      Alert.alert(`이거 맞니?\n\n $msgContents}`);
      this.props.navigation.navigate('InputSMSCode', res);
    })
    .catch((error) => {
      console.log('there was an error sending the query', error);
      Alert.alert('정상적인 코드가 아니거나 유효시간이 지났습니다.\n\n다시 시도해 주세요.');
    });

    // alert(code);
    // console.log('_getUserInfo: ', API_URL + '/test/qrcode?code=' + code);
    // TDOO: progress bar 표시하기
    /*fetch(API_URL + '/test/qrcode?code=' + code)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        // alert(JSON.stringify(res));
        // return res;
        this.props.navigation.navigate('InputSMSCode', res);
      })
      .catch(err => {
        console.log('[ERROR]', err);
        alert(err)
      });*/
  }

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <QRCodeScannerView next={this._requestAuthInfo} />;
    case '2':
      return <InputCodeView { ...this.props } next={this._requestAuthInfo} />;
    default:
      return null;
    }
  }
  
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

export default graphql(GET_CONTENTS, {

})(InputAuthCode);