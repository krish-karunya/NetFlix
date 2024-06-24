import React, { useEffect } from "react";
import { auth } from "../utils/fireBase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        // navigate(/error)
      });
  };
  useEffect(() => {
    // its kind of event listerner whenever sign in /sign up happen this will call automagically
    // Basically onAuthStateChanged gives unsubscribe function when it is unmounted we can mention it inside the return

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      //unsubscribe will call when component unmount
      unsubscribe();
    };
  }, []);
  const handleGptSearchClick = () => {
    //Toggle Gpt Search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className='fixed top-0 z-50 h-20 px-3 pt-10 sm:px-[10%] filter flex justify-between items-center w-full bg-gradient-to-b from-black from-40% to-transparent '>
      {/* here tailwind applied for mobileview normally it will take mobile , sm is greater than mobile like tab md is desktop view */}
      <img src={LOGO} alt='Netflix-logo' className='w-56  mx-auto md:mx-0' />
      {user && (
        <div className='flex p-2  justify-between'>
          {showGptSearchView && (
            <select
              className=' text-black py-2  px-4 m-4 rounded-md pr-3'
              onChange={(e) => dispatch(changeLanguage(e.target.value))}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.idenftifier} value={lang.idenftifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className='py-2 px-4 m-4 bg-purple-800 text-white rounded-md'
            onClick={handleGptSearchClick}>
            {showGptSearchView ? "Home Page " : "GPT Search"}
          </button>
          {/* <img src={user.photoURL} alt="logout" className="w-24 h-20 " /> */}
          <button
            className='text-white  font-bold  bg-red-600 rounded-md px-3 text-center m-4'
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
