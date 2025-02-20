import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

export function useSignInFirebase() {
  const [userCredentials, setUserCredentials] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const auth = getAuth();
  function SignInFirebase(email, password) {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserCredentials(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message);
      });
    setLoading(false);
  }
  return { userCredentials, loading, error, SignInFirebase };
}
