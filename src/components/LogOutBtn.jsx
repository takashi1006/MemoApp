import React from 'react';
import {
  Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function logOutBtn() {
  const navigation = useNavigation();

  function handlePress() {
    // firebase
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      Alert.alert('success!');
      navigation.reset({
        index: 0,
        routes: [{ name: 'LogIn' }],
      });
    }).catch((error) => {
      // An error happened.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      Alert.alert(errorCode);
    });
  }

  return (
    <TouchableOpacity style={styles.logOutContainer} onPress={handlePress}>
      <Text style={styles.logOutLabel}>
        ログアウト
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logOutContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  logOutLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
});
