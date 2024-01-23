import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { Input } from '../Input';
import * as Clipboard from 'expo-clipboard';
import { generatePassword } from '../../services/PasswordService';
import Toast from 'react-native-toast-message';

export function Buttons() {
  const [pass, setPass] = useState('');

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setPass(newPassword);
  };

  const handleCopyButton = () => {
    Clipboard.setStringAsync(pass);
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Senha copiada!',
      text2: 'A senha foi copiada para a área de transferência.',
      visibilityTime: 4000,
      autoHide: true,
      bottomOffset: 40,
    });
  };

  return (
    <>
      <Input value={pass} onChangeText={setPass} />
      <Pressable style={styles.button} onPress={handleGeneratePassword}>
        <Text style={styles.textButton}>Generate</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.textButton}>📎 Copy</Text>
      </Pressable>
    </>
  );
}
