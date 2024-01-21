import { View, Text } from 'react-native';
import React from 'react';
import styles from './Styles';
import { StatusBar } from 'expo-status-bar';
import { BatLogo } from '../../components/BatLogo';
import { Input } from '../../components/Input';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <Input />
      </View>

      <Text style={styles.text}>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}
