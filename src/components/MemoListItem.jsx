import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

export default function memoListItem() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>メモタイトル1</Text>
          <Text style={styles.memoListItemDate}>2021年11月25日 15:00</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
            <Text>
              <Feather name="x" size={16} color="#808080" />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>メモタイトル1</Text>
          <Text style={styles.memoListItemDate}>2021年11月25日 15:00</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
            <Text>
              <Feather name="x" size={16} color="#808080" />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
  memoDelete: {
    padding: 8,
  }
});
