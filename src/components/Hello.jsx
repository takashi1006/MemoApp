import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { bool, shape, string } from 'prop-types';

export default function hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        { `Hello ${children}${bang ? '!' : ''}` }
      </Text>
    </View>
  );
}

hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};

hello.defaultProps = {
  bang: false,
  style: null,
};

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});
