import { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  //   getIdToken,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../pages/Login/Login/Firebase/firebase.int";
import swal from "sweetalert";

// initialize app call korsi
initializeAuthentication();

const useFirebase = () => {
  // get the user here store
  const [user, setUser] = useState({});
  console.log(user);

  // token store here
  //   const [token, setToken] = useState("")

  // reload dile jate page change na hoi sei jonno eta set korsi
  const [isLoading, setIsLoading] = useState(true);
  // for auth error er jonno state create korsi
  const [authError, setAuthError] = useState("");

  // get the admin usser set here
  const [admin, setAdmin] = useState(false);
  console.log('admin', admin);

  // from firebase
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // SIGN in with google with popup

  const signInWithGoolge = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        swal("Good job!", "Account has been created!", "success");
        console.log(user.email);
        saveUserOnDatabase(user?.email, user?.displayName, "PUT");
        const redirects = location?.state?.from || "/";
        // history.push(redirects);
        // or
        history.replace(redirects);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   create a new user with email and password or register user
  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAuthError("");
        // state e name take set korsi
        const newUser = { email, displayName: name };
        setUser(newUser);
        swal("Good job!", "Account has been created!", "success");

        // save user to the database
        saveUserOnDatabase(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        history.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   login with email and password

  const loginWithEmailAndPassword = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        swal("Good job!", "Sign In successfully!");
        const redirects = location?.state?.from || "/";
        // history.push(redirects);
        // or
        history.replace(redirects);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   observer eta dara user kokhon ki korse ta observe korbe logout korlo na login korlo etc eta useeffect er moddhe korte hobe jate ekbar call hoi user ki korse sei onujaie /// eta firebase er manage user er moddhe onauthstateChange dekte pabo etai observer hisabe kaj korbe

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // getIdToken(user).then(idToken => {
        //   console.log(idToken);
        //   setToken(idToken)
        // })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // admin data load here
    useEffect(() => {
      fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))

    }, [user?.email])

  //   user signout here function
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // user save on the database
  const saveUserOnDatabase = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return {
    user,
    admin,
    setAdmin,
    authError,
    isLoading,
    setIsLoading,
    signInWithGoolge,
    registerUser,
    loginWithEmailAndPassword,
    logout,
  };
};

export default useFirebase;
