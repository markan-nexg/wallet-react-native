import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
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
          <Text>테스트</Text>
          <View style={styles.spacer}/>
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