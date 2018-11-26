import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, View, Button } from 'react-native';
import Container from '../containers/Container';

export default  class Home extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  // };

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
        <View style={{padding:20}}>
          <Text>테스트</Text>
          <View style={styles.spacer}/>
          <Button
            title="QR코드"
            onPress={() => navigate('BarcodeScanner')}
          />
          <View style={styles.spacer}/>
          <Button
            title="지갑목록"
            onPress={() => navigate('Wallets')}
          />
          <View style={styles.spacer}/>
          <Button
            title="Stellar Test"
            onPress={() => navigate('StellarTest')}
          />
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  spacer: {
    height: 20
  }
});