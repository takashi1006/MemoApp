import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleBtn from '../components/CircleBtn';

export default function memoCreateScreen() {
  return (

    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleBtn name="check" />
    </KeyboardAvoidingView>
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
