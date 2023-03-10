import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import { useState } from 'react';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return (
    <Screen>
      <ListItem
        image={require('./app/assets/mosh.jpg')}
        title="djsidbndbndjsnbkjdnkbndskbnkdsnbkdsnfbdbnjdnbjkdnkbndjbndnbkdsnbkjdnfbjkdnbkndjnbkdnfbkndbkjdnbkdnfjbndkbnjsdknbkdnbkdnfjdnkbndkjnbjkdnfbkjdnbjkdnbkndkjbndjkbnkjdnkbndkbndk"
        subTitle="onsiojbgeingjnnflnffenwgouiqwnrgu3nfowt4igjofi2uoi3ugrnjfreogrbifnjru39iehvjndfoiwbhudfjndfwhkjdbfnvjdfoifwhkjbdfndjfiowkdbhjfndjfdkhbfjnfjdfsdkjbndfsikhjdbnkfskdjvhbknjdfsdhkbcnfsjkhbknfsdhbjnckdvhkc"
        showChevrons
      />
    </Screen>
  );
}
