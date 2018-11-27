import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Container from '../containers/Container';

export default  class InputCode extends Component {

  static propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
        navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigate, state } = this.props.navigation;

    return (
      <Container>
        <View style={styles.contents}>
          <Text>인증 코드 입력</Text>
          <View style={styles.spacer}/>
          <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder='인증번호를 입력하세요.' />
          <Button
            title="확인"
            onPress={() => navigate('Wallets')}
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