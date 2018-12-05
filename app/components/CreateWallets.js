import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import Container from '../containers/Container';

class CreateWallets extends Component {

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
          <View style={styles.upper}>
            <Text>닉네임길이열글자까지 님의 지갑을 만듭니다. 지갑의 개인키는 암호화되어 본 휴대기기에 안전하게 저장됩니다.</Text>
          </View>
          <View style={styles.low}>
            <TouchableOpacity>
              <View style={styles.btn}>
                <Button
                  title="지갑생성"
                  onPress={() => navigate('Wallets')}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.btn}>
              <Button
                title="지갑복구"
                style={styles.btn}
                onPress={() => navigate('Wallets')}
              />
            </View>
          </View>
        </View>
      </Container>
    );
  }
};

const styles = StyleSheet.create({
  contents: {
    flex: 1,
    padding: 20
  },
  upper: {
    flex: 1
  },
  low: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    // display: 'flex',
    // flex: 1,
    // height: 50,
    borderWidth: 1,
    borderColor: '#4094EF',
    // backgroundColor: '#4094EF',
    marginVertical: 10,
    paddingVertical: 10,
  }
});

export default CreateWallets;