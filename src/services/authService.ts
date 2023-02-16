import {signInWithEmailAndPassword, signOut, getAuth, auth} from '../firebase/firebase';

export type AuthDataI = {
  token: string;
  email: string | null;
  name: string;
};

const signInWithFirebase = async (email: string, password: string): Promise<AuthDataI> => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  // the API will resolve with some token and another datas as the below
  const {user} = await signInWithEmailAndPassword(auth, email, password);
  const data = await user.getIdTokenResult();

  return new Promise(resolve =>
    resolve({
      token: data.token,
      email: user.email,
      name: user.displayName || 'NERGone User',
    }),
  );
};

const signOutFromFirebase = () => {
  const auth = getAuth();
  signOut(auth);
};

export const authService = {
  signIn: signInWithFirebase,
  signOut: signOutFromFirebase,
};
