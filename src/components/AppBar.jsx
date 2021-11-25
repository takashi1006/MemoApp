import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function appBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Memo App</Text>
        <Text style={styles.appBarLight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#467FD3',
    width: '100%',
    height: 104,
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  appBarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appBarLight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },
});
