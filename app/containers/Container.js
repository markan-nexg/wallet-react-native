import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { PropTypes } from 'prop-types';

class Container extends Component {
    render() {
        return (
          <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            {this.props.children}
          </View>
        );
    }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  }
}); 

export default Container;