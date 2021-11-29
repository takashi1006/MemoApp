import React, { useLayoutEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MemoListItem from '../components/MemoListItem';
import CircleBtn from '../components/CircleBtn';
import LogOutBtn from '../components/LogOutBtn';

export default function memoListScreen(props) {
  const { navigation } = props;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutBtn />,
    });
  }, [navigation]);
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
