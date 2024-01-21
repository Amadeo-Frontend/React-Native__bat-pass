import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

export function Input() {
  return (
    <View style={styles.inputStyles}>
      <TextInput placeholder="Pass" multiline={true} />
    </View>
  );
}
