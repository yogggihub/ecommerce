import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import SingUpForm from "../components/sign-up-form/sign-up-form-component";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>Sign In Page</h1>
      <SingUpForm />
      <button onClick={logGoogleUser}>Sing in with Google poup Method</button>
    </>
  );
};
export default SignIn;
