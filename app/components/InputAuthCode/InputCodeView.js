import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Container from '../../containers/Container';

class InputCodeView extends Component {

  state = {
    code: ''
  }

  _next = () => {
    console.log('InputCodeView._next')
    const { code } = this.state;
    if(!code) return alert('인증코드를 입력하세요.');

    this.props.next(code);
    this.setState({ code: '' });
  }

  render() {
    return (
      <Container>
        <View style={styles.contents}>
          <Text>인증 코드 입력</Text>

          <TextInput 
            style={ styles.inputBox }
            value={ this.state.code }
            onChangeText={code => this.setState({code})}
            placeholder='인증번호를 입력하세요.' />
          
          <Button
            title="입력"
            onPress={this._next}
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

InputCodeView.propTypes = {
  next: PropTypes.func.isRequired,
};

export default InputCodeView;
