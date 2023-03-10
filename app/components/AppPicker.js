import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

export default function AppPicker({
  icon,
  items,
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [moduleVisible, setModuleVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModuleVisible(true);
        }}
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={moduleVisible} animationType="slide">
        <Screen>
          <Button
            title="close"
            onPress={() => {
              setModuleVisible(false);
            }}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => {
              return item.value.toString();
            }}
            renderItem={({ item }) => {
              return (
                <PickerItem
                  label={item.label}
                  onPress={() => {
                    setModuleVisible(false);
                    onSelectItem(item);
                  }}
                />
              );
            }}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
