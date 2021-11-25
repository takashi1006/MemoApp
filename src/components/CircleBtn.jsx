import { shape, string } from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function circleBtn(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleBtn, style]}>
      <Text style={styles.circleBtnLabel}>
        <Feather name={name} size={32} color="white" />
      </Text>
    </View>
  );
}

circleBtn.propTypes = {
  style: shape(),
  name: string.isRequired,
};

circleBtn.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleBtn: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // shadowはiOSのみ対応
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // elevationはandroidのみ
    elevation: 8,
  },
  circleBtnLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
