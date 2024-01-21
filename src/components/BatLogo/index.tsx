import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import batLogo from '../../../assets/img/bat-logo.png';

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>BAT PASS GENERATOR</Text>
      <Image
        source={batLogo}
        style={{
          resizeMode: 'contain',
          height: 180,
        }}
      />
    </View>
  );
}
