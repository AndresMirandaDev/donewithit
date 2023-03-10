import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from './AppText';
import Icon from './Icon';

export default function CategoryPickerItem({ onPress, item }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
