import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  shape,
  string,
  instanceOf,
  arrayOf,
} from 'prop-types';

export default function memoListItem(props) {
  const { memos } = props;
  const navigation = useNavigation();

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
          <Text style={styles.memoListItemDate}>{String(item.updateAt)}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.memoDelete} onPress={() => { Alert.alert('Are you sure?'); }}>
            <Text>
              <Feather name="x" size={16} color="#808080" />
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatContainer: {
    flex: 1,
  },
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
  },
});

memoListItem.propsTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updateAt: instanceOf(Date),
  })).isRequired,
};
