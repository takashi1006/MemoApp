import React from 'react';
import { View, StyleSheet } from 'react-native';
import MemoListItem from '../components/MemoListItem';
import CircleBtn from '../components/CircleBtn';

export default function memoListScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoListItem />
      <CircleBtn
        name="plus"
        onPress={() => {
          navigation.navigate("MemoEdit");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
