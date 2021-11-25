import { string } from 'prop-types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function circleBtn(props) {
  const { children } = props;
  return (
    <View style={styles.circleBtn}>
      <Text style={styles.circleBtnLabel}>{children}</Text>
    </View>
  );
}

circleBtn.propTypes = {
  children: string.isRequired,
  // children: string,
};

// circleBtn.defaultProps = {
//   children: '+',
// };

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
