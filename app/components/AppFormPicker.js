import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';
import PickerItem from './PickerItem';

export default function AppFormPicker({
  items,
  name,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
  width,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched} />
    </>
  );
}

const styles = StyleSheet.create({});
