import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useAuth} from '../../contexts/AuthProvider';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {Loading, Input, Button} from '../../common/components';
import RoundedGradientButton from '../../common/components/buttons/RoundedGradientButton';

const WatchesImage = require('../../assets/img/watches.png');
const LogoImage = require('../../assets/img/logo/logo.png');

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
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
  emailWrapper: {
    height: 90,
    borderRadius: 24,
    marginTop: 100,
  },
  passwordWrapper: {
    height: 90,
    borderRadius: 24,
    marginTop: 45,
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
  const {t} = useTranslation();
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
          <Button>
            <Text style={styles.forgotText}>{t('app.forgotPassword')}</Text>
          </Button>
          <RoundedGradientButton
            onPress={() => signIn()}
            customStyle={styles.sigInButton}
            textStyle={styles.signInText}
            label={t('app.signIn')}
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
