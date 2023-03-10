import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

import colors from '../config/colors';

export default function App() {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
      blurRadius={6}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          color="primary"
          title="Login"
          onPress={() => {
            console.log('login button tapped');
          }}
        />
        <AppButton
          color="secondary"
          title="Register"
          onPress={() => {
            console.log('register button tapped');
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: 600,
    paddingVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    margin: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
});
