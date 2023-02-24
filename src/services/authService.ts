import axios from 'axios';

const apiUrl = 'https://us-central1-nerg-one.cloudfunctions.net/api';

export type TAuthData = {
  accessToken: string;
};

export type TLoginWithEmail = {
  email: string;
  password: string;
};

export const loginWithEmail = async ({email, password}: TLoginWithEmail): Promise<TAuthData> => {
  const url = `${apiUrl}/login`;
  const res = await axios.post(url, {email, password});

  return Promise.resolve({
    accessToken: res.data.customToken,
  });
};

export type TSignUpWithEmail = {
  email: string;
  password: string;
  secureNote: string;
};

export const signUpWithEmail = async (props: TSignUpWithEmail): Promise<TAuthData> => {
  const url = `${apiUrl}/register`;
  const res = await axios.post(url, props);

  return Promise.resolve({
    accessToken: res.data.customToken,
  });
};

type TValidateUser = {
  userIdToken: string;
};

export const validateToken = async ({userIdToken}: TValidateUser) => {
  const url = `${apiUrl}/user/validateToken/`;
  const res = await axios.get(url, {
    headers: {
      authorization: `Bearer ${userIdToken}`,
    },
  });

  return Promise.resolve(res.data);
};

export const revokeToken = async (idToken: string | undefined) => {
  const url = `${apiUrl}/user/revoke/`;
  const res = await axios.post(url, {
    idToken,
  });

  return Promise.resolve(res.data);
};

export const authService = {
  loginWithEmail,
  signUpWithEmail,
  validateToken,
  revokeToken,
};
