import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import batLogo from '../../../assets/img/bat-logo.png';

interface BatLogoProps {
  onPress: () => void;
}

export function BatLogo({ onPress }: BatLogoProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={batLogo}
        style={{
          resizeMode: 'contain',
          height: 180,
        }}
      />
    </TouchableOpacity>
  );
}
