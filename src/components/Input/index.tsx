import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function Input({ value, onChangeText }: InputProps) {
  return (
    <View style={styles.inputStyles}>
      <TextInput
        placeholder="Password"
        multiline={true}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
