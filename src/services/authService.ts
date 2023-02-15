import {signInWithEmailAndPassword, auth} from '../firebase/firebase';
export type AuthDataI = {
  token: string;
  email: string;
  name: string;
};
export type UserCredential = {user: object; operationType: string};

const signIn = (email: string, password: string): Promise<AuthDataI> => {
  // this is a mock of an API call, in a real app
  // will be need connect with some real API,
  // send email and password, and if credential is corret
  // the API will resolve with some token and another datas as the below

  signInWithEmailAndPassword(auth, email, password)
    .then((result: UserCredential) => {
      // console.log(result);
      return result.user;
    })
    .catch(err => {
      // console.log(err);
      return {error: err};
    });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: JWTTokenMock,
        email: email,
        name: 'Max One User',
      });
    }, 1000);
  });
};

export const authService = {
  signIn,
};

const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
