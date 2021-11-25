import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import MemoListItem from '../components/MemoListItem';
import CircleBtn from '../components/CircleBtn';

export default function memoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoListItem />
      <CircleBtn name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
