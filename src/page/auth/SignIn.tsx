import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useToast} from 'react-native-toast-notifications';
import {useAuth} from '../../contexts/AuthProvider';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../common/constants/StyleConstants';
import {Loading, Input, Button, RoundedGradientButton} from '../../common/components';
import {normalize, normalizeHalf, normalizeQuarter, normalizeRate} from '../../utils/normalize';

const WatchesImage = require('../../assets/img/watches.png');
const LogoImage = require('../../assets/img/logo/logo.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: normalizeHalf(60),
    gap: normalizeHalf(60),
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    width: '80%',
    resizeMode: 'contain',
    marginBottom: normalizeHalf(16),
  },
  text: {
    fontSize: normalize(36),
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK,
  },
  input: {
    fontSize: FONT_SIZE.L,
    fontWeight: FONT_WEIGHT.LIGHT,
    color: COLORS.BLACK_LIGHT,
    paddingVertical: normalizeHalf(20),
    paddingHorizontal: 28,
  },
  emailWrapper: {
    height: normalize(90, 'height'),
    borderRadius: 24,
    marginTop: normalizeQuarter(90),
  },
  passwordWrapper: {
    height: normalize(90, 'height'),
    borderRadius: 24,
    marginTop: normalizeHalf(45),
  },
  buttonGroupWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalizeHalf(50),
  },
  forgotText: {
    fontWeight: FONT_WEIGHT.LIGHT,
    fontSize: normalize(FONT_SIZE.XXL),
    color: COLORS.BLUE,
    textDecorationLine: 'underline',
  },
  signInText: {
    fontWeight: FONT_WEIGHT.MIDDLE,
    fontSize: normalize(FONT_SIZE.XXL),
    color: COLORS.WHITE,
  },
  sigInButton: {
    width: normalize(220),
    height: normalize(70),
    borderRadius: 50,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  watches: {
    width: normalize(580),
    height: normalize(465),
    resizeMode: 'contain',
  },
  watchDesc: {
    textAlign: 'center',
  },
});

const SignInScreen = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {t} = useTranslation();
  const {errors, loading, setLoading, signIn} = useAuth();

  const toastNotification = useCallback(() => {
    if (errors?.length) {
      toast.show('User not found..', {
        type: 'danger',
        placement: 'top',
        duration: 3000,
        animationType: 'slide-in',
        style: {
          flexDirection: 'row',
          alignItems: 'center',
        },
      });
    }
  }, [errors]);

  useEffect(() => {
    toastNotification();
  }, [errors]);

  const handleSignIn = async () => {
    setLoading(true);
    await signIn(email, password);
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
            onPress={() => handleSignIn()}
            startColor={COLORS.BLUE_LIGHT}
            endColor={COLORS.BLACK}
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
