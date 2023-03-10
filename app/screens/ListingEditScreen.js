import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import SubmitButton from '../components/SubmitButton';
import CategoryPickerItem from '../components/CategoryPickerItem';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    label: 'Furniture',
    value: 1,
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
  },
  { label: 'Cars', value: 2, backgroundColor: '#fd9644', icon: 'car' },
  { label: 'Cameras', value: 3, backgroundColor: '#fed330', icon: 'camera' },
  { label: 'Games', value: 4, backgroundColor: '#26de81', icon: 'cards' },
  {
    label: 'Clothing',
    value: 5,
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
  },
  { label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
  {
    label: 'Movies & Music',
    value: 7,
    backgroundColor: '#4b7bec',
    icon: 'headphones',
  },
  {
    label: 'Books',
    value: 8,
    backgroundColor: '#4b7bec',
    icon: 'book-open-variant',
  },
  {
    label: 'Other',
    value: 9,
    backgroundColor: '#4b7e',
    icon: 'file-presentation-box',
  },
];

export default function ListingEditScreen() {
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={110}
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
