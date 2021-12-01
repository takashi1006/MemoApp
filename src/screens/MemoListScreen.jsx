import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  getFirestore,
  getDocs,
  collection,
  query,
  orderBy,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
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
  }, []);

  const [memos, setMemos] = useState([]);

  useEffect(async () => {
    const db = getFirestore();
    const { currentUser } = getAuth();
    let unsubscribe = () => {};
    if (currentUser) {
      const q = query(collection(db, `users/${currentUser.uid}/memos`), orderBy('updatedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const userMemos = [];
      unsubscribe = querySnapshot.forEach((doc) => {
        userMemos.push({
          id: doc.id,
          bodyText: doc.data().bodyText,
          updateAt: doc.data().updatedAt.toDate(),
        });
        // console.log(`${doc.id} => ${doc.data().bodyText}`);
      });
      setMemos(userMemos);
    }
    return unsubscribe;
  }, [memos]);

  return (
    <View style={styles.container}>
      <MemoListItem memos={memos} />
      <CircleBtn
        name="plus"
        onPress={() => {
          navigation.navigate('MemoCreate');
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
