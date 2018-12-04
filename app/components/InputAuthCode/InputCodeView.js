import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Container from '../../containers/Container';

export default class InputCodeView extends Component {

  render() {
    return (
      <Container>
        <View style={styles.contents}>
          <Text>인증 코드 입력</Text>

          <TextInput 
            style={ styles.inputBox }
            placeholder='인증번호를 입력하세요.' />
          
          <Button
            title="입력"
            onPress={() => alert('ok')}
          />
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
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
