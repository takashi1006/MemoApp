import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';

export default function btn(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

btn.propTypes = {
  label: string.isRequired,
  onPress: func,
};

btn.defaultProps = {
  onPress: null,
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
