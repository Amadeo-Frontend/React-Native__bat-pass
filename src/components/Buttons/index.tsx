import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export function Buttons() {
  const pressionarBotao = () => {
    alert('Botão pressionado!');
  };
  return (
    <View>
      <Pressable style={styles.button} onPress={pressionarBotao}>
        <Text style={styles.textButton}>Generate</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={pressionarBotao}>
        <Text style={styles.textButton}>📎 Copy</Text>
      </Pressable>
    </View>
  );
}
