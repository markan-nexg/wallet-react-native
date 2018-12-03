import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Container from '../containers/Container';

export default class InputSMSCode extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  _next() {
    // 입력받은 인증번호로 복호화

    // 복호화 끝.
    // {
    //   refreshToken: "gPYIXfAN5WG8GkPg7YxySazSaIT13bnPwq5D7zF4"
    //   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1IjoiYzQ3NjczYjAtMGZlNy00NDM5LWEzZGUtOTZjNjBmYTZhYWQ2IiwiaWF0IjoxNTQzODI4NzIwLCJleHAiOjE1NDM4Mjg3NDB9.TZL1_IHrNvjWZPoAaGVqCP0rgsH7lcESu7mfza6jKNc"
    //   usrId: "c47673b0-0fe7-4439-a3de-96c60fa6aad6"
    // }

    // 데이터 저장.
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
          <View style={styles.spacer}/>
          <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder='인증번호를 입력하세요.' />
          <View style={styles.spacer}/>
          <Button
            title="확인"
            onPress={() => this._next()}
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
  }
});