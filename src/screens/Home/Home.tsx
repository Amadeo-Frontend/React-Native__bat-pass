import { View } from 'react-native';
import React from 'react';
import styles from './Styles';
import { StatusBar } from 'expo-status-bar';
import { BatLogo } from '../../components/BatLogo';
import { Input } from '../../components/Input';
import { Buttons } from '../../components/Buttons';

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>
      <View style={styles.inputContainer}>
        <Input />
      </View>
      <View style={styles.buttonContainer}>
        <Buttons />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
