import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/fireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATHAR } from "../utils/constant";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInFrom);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;

    // sign in/sign up:

    if (!isSignInFrom) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          // display  & photoURL name API :
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATHAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, "-", errorMessage);
          setErrorMessage(errorCode, "-", errorMessage);
          // ..
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, "-", errorMessage);
          if (errorCode) {
            setErrorMessage("Invalid Credential");
          }
        });
    }

    // console.log(checkValidateData(email.current.value, password.current.value));
    // console.log(email);
    // console.log(password);
    // console.log(name);
  };
  return (
    <div>
      <Header />
      <div className=' absolute '>
        <img
          src={BG_URL}
          alt='bgimage'
          className=' fixed h-screen object-cover md:w-screen '
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='  absolute p-12 bg-black opacity-90 md:w-4/12 my-24 mx-auto right-0 left-0 text-whitemd:h-4/5 rounded-md'>
        <h1 className='font-bold text-3xl py-6  text-white'>
          {" "}
          {isSignInFrom ? "Sign In" : "Sign up"}{" "}
        </h1>
        {!isSignInFrom && (
          <input
            type='text'
            placeholder='Name '
            className='text-white py-4 m-2 w-full rounded-lg p-8 text-left bg-slate-800'
            ref={name}
          />
        )}

        <input
          type='text'
          placeholder='Email Address or phone number '
          className='py-4 text-white m-2 w-full rounded-lg p-8 text-left bg-slate-800'
          ref={email}
        />
        <input
          type='password'
          placeholder='Password'
          className='py-4 text-white m-2 w-full rounded-lg p-8 text-left bg-slate-800'
          ref={password}
        />
        <p className='text-red-700 font-bold text-xl py-2'>{errorMessage}</p>
        <button
          className='py-3 m-2 my-10 w-full bg-red-800 rounded-lg font-bold text-xl   '
          onClick={handleButtonClick}>
          {isSignInFrom ? "Sign in" : "Sign Up"}
        </button>

        <p>
          <span className='text-gray-500'>
            {" "}
            {isSignInFrom ? "New to Netflix?" : "Already Registered? "}
          </span>{" "}
          <span
            className='font-bold text-xl cursor-pointer text-white'
            onClick={toggleSignForm}>
            {isSignInFrom ? "Sign up now" : "Sign in now"}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
