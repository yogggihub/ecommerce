import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/form-input/form-input-component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SingUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Not Fatch");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User Already Exist");
      } else {
        console.log("User creation error", error);
      }
    }
  };
  return (
    <div>
      <h1>SingUp with your Email and Password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Email"
          type="email"
          value={email}
          required
          name="email"
          onChange={onChangeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          value={confirmPassword}
          name="confirmPassword"
          onChange={onChangeHandler}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SingUpForm;
