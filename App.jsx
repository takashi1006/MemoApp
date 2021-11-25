import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoListItem from './src/components/MemoListItem';
import CircleBtn from './src/components/CircleBtn';

function app() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoListItem />
      <CircleBtn>+</CircleBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

export default app;
