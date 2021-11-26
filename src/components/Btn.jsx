import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function btn(props) {
  const { label } = props;
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.btnLabel}>{label}</Text>
    </View>
  );
}

btn.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  btnLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
  },
});
