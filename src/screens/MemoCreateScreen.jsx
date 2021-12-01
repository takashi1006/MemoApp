import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import { getAuth } from 'firebase/auth';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import CircleBtn from '../components/CircleBtn';
import KeyboardSafeView from '../components/KeboardSafeView';

export default function memoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  async function handlePress() {
    const { currentUser } = getAuth();
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, `users/${currentUser.uid}/memos`), {
        bodyText,
        updatedAt: new Date(),
      });
      console.log('Document written with ID: ', docRef.id);
      navigation.goBack();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>
      <CircleBtn
        name="check"
        onPress={handlePress} />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
