import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { StatusBar } from 'expo-status-bar';
import { BatLogo } from '../../components/BatLogo';
import { Buttons } from '../../components/Buttons';

export default function Home() {
  const [key, setKey] = useState(0);

  const resetApp = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <View style={styles.appContainer} key={key}>
      <View style={styles.logoContainer}>
        <Text style={styles.textStyle}>BAT PASS GENERATOR</Text>
        <BatLogo onPress={resetApp} />
      </View>
      <View style={styles.buttonContainer}>
        <Buttons />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
