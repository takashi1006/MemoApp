import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function memoListItem() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>メモタイトル1</Text>
          <Text style={styles.memoListItemDate}>2021年11月25日 15:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>メモタイトル2</Text>
          <Text style={styles.memoListItemDate}>2021年11月25日 15:00</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    color: '#848484',
    fontSize: 12,
    lineHeight: 16,
  },
});
