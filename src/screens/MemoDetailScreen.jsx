import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import CircleBtn from '../components/CircleBtn';

export default function memoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>タイトル</Text>
        <Text style={styles.memoDate}>2021年11月25日</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          テキストがいっぱい入ってるよ！
          テキストがいっぱい入ってるよ！
          テキストがいっぱい入ってるよ！
          テキストがいっぱい入ってるよ！
        </Text>
      </ScrollView>
      <CircleBtn
        style={{ top: 60, bottom: 'auto' }}
        name="edit-2"
        onPress={() => {
          navigation.navigate('MemoEdit');
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
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
