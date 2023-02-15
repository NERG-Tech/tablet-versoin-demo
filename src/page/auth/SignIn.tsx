import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useAuth} from '../../contexts/AuthProvider';
import Loading from '../../common/components/Loading';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import Input from '../../common/components/Input';
import RoundedGradientButton from '../../common/components/buttons/RoundedGradientButton';

const WatchesImage = require('../../assets/watches.png');
const LogoImage = require('../../assets/logo/logo.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: 60,
    gap: 60,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    width: 497,
    height: 110,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  text: {
    fontSize: 36,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK,
  },
  input: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK_LIGHT,
  },
  emailWrapper: {
    marginTop: 100,
    borderRadius: 24,
  },
  passwordWrapper: {
    marginTop: 45,
    borderRadius: 24,
  },
  buttonGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  forgotText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.BLUE,
    textDecorationLine: 'underline',
  },
  signInText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: FONT_SIZE.XXL,
    color: COLORS.WHITE,
  },
  sigInButton: {
    width: 220,
    height: 70,
    borderRadius: 50,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  watches: {
    width: 580,
    height: 465,
    resizeMode: 'contain',
  },
  watchDesc: {
    textAlign: 'center',
  },
});

const SignInScreen = () => {
  const [loading, isLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = useAuth();

  const signIn = async () => {
    isLoading(true);
    await auth.signIn(email, password);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.logo} source={LogoImage} />
        <Text style={styles.text}>Get smarter with every draft.</Text>
        <Input
          value={email}
          placeholder="E-mail"
          textStyle={styles.input}
          inputStyle={styles.emailWrapper}
          keyboardType="email-address"
          onChangeText={(text: string) => {
            setEmail(text);
          }}
        />
        <Input
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          textStyle={styles.input}
          inputStyle={styles.passwordWrapper}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
        />
        <View style={styles.buttonGroupWrapper}>
          <Text style={styles.forgotText}>Forgot password</Text>
          <RoundedGradientButton
            onPress={() => signIn()}
            customStyle={styles.sigInButton}
            textStyle={styles.signInText}
            label="Log In"
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image style={styles.watches} source={WatchesImage} />
        <Text style={StyleSheet.flatten([styles.text, styles.watchDesc])}>
          Optimize your offseason program with NERG One.
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;
