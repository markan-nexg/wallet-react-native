import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import Container from '../containers/Container';
import SecureStorage, { ACCESS_CONTROL, ACCESSIBLE, AUTHENTICATION_TYPE } from 'react-native-secure-storage';

export default class InputSMSCode extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  async _next(data) {
    // 입력받은 인증번호로 복호화

    // 복호화 끝.
    // {
    //   refreshToken: "gPYIXfAN5WG8GkPg7YxySazSaIT13bnPwq5D7zF4"
    //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiYzQ3NjczYjAtMGZlNy00NDM5LWEzZGUtOTZjNjBmYTZhYWQ2IiwiaWF0IjoxNTQzODI4NzIwLCJleHAiOjE1NDM4Mjg3NDB9.TZL1_IHrNvjWZPoAaGVqCP0rgsH7lcESu7mfza6jKNc"
    //   usrId: "c47673b0-0fe7-4439-a3de-96c60fa6aad6"
    // }
    console.log('SecureStorage', SecureStorage);

    const config = {
      accessControl: ACCESS_CONTROL.BIOMETRY_ANY_OR_DEVICE_PASSCODE,
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
      authenticationPrompt: 'auth with yourself',
      service: 'example',
      authenticateType: AUTHENTICATION_TYPE.BIOMETRICS,
    }

    Alert.alert(JSON.stringify(data));

    // 데이터 저장.
    try {
      const userData = JSON.stringify(data);
      console.log('SecureStorage.setItem', SecureStorage.setItem);
      const key = 'user';
      await SecureStorage.setItem(key, userData, config);
      const got = await SecureStorage.getItem(key, config);
      console.log(got);
    } catch(err) {
      console.log(err);
    }

    this.props.navigation.navigate('SuccessDeviceAuth')
  }

  render() {
    const { navigate, state } = this.props.navigation;
    // console.log('InputSMSCode', this.props);
    console.log('InputSMSCode', state.params);
    // console.log('InputSMSCode', navigate);

    return (
      <Container>
        <View style={styles.contents}>
          <Text>인증 코드 입력</Text>
          <View style={styles.spacer}/>
          <Text>이제 문자 메세지로 받으신 인증번호를 입력해 주시면 사용자 인증이 완료됩니다.</Text>
          
          <TextInput 
            style={styles.inputBox}
            placeholder='인증번호를 입력하세요.' />
          
          <Button
            title="확인"
            onPress={() => this._next(state.params)}
          />
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  spacer: {
    height: 20
  },
  contents: {
    padding: 20
  },
  inputBox: {
    height: 40, 
    borderColor: '#BBB', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
  }
});