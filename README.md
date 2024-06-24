# Netflix GPT

- Create react app
- Configured TailwindCSS
- Header
- Routing of App
- Login
- Sign up Form
- Form Validation
- UseRef Hook
- FireBase Setup
- Deploying Sour app to production
- Create Signup user Account
- Implement Sign In use Api
- Create user Redux store with user Slice
- Implemented sign out
- Update profile Api
- Add photo and displayName
- Fetch from TMDB movies
- Bugfix : sign up user displayName and profile picture update
- Bugfix : if the user is not logged in but trying to access the "/browser" it will redirect to home page "/" login page
- Unsubcribed to the onAuthStateChange Callback
- Add harcoded value to the constant file
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- custom hook for Now Playing Movies
- Create movieSlice
- Update store with movies Data
- Planning for Maincontainer & secondary container
- Fetch Data for Trailer Vedio
- Update store with Trailer Vedio Data
- Embedded the Youtube vedio and make it autoplay and mute
- TailwindClasses to make main Container look awesome
- Build Secondary Container
  Build Movie list
  Build MovieCard
  TMBD image CDN
  Made browse page amazing
  Created usepopular,usetopRatedmovie,useUpcomig fetch the data show in movie list
  Gpt search page
  Gpt search bar
  Add multi Language feature in our App
  Integrate OpenAI API in our search bar that will give you movie name
  using TMBD Movie API to get the movie data
  store the movie data in gptSlice reducer
  Using <MovieList> component to show the movie data (reusability) (here we have used promise.all method )
  Memoization
  Let's Make our Project Mobile Responesive

# Features :

- Browse
- Header
-

until we have finished upto form validation
regex for testing name,emailId , passwords
to create a difficult form we can use formik library

NetflixGPT-part 04 (1.58) -(Authentication )

- Todo the authentication we need a backend ,we will be using google-firebase

Website : firebase.google.com -> create a account
-create fireBase.js file in our App and copy the configuration and paste it here, this config having lot of api that will help us to do authentication

- we have create a account in firebase ,will see how we can deploy our app
  -Before that we should install this - "npm install -g firebase-tools"
  and than this "firebase login"

you will get this error
Error:firebase : File C:\Users\krish\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system. For more information,
see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1

# NetflixGPT - part-05 (timing : 2.30)

- sign in /sign up logic

copy config code paste it in login Form fire base - sign in and sign out:

Now we have created authentication , if you enter email id and password it will save in our fire-base account

- we need show this email and password details all our page , so now we are going to create a redux store and paste all the user information in redux state and then we can able to access it in any of the component

# TMDB (API for creating movie app)

- Create user and resgister your name and complete the Email verifiaction
- Select Edit profile you will able to see the Api left side ,Your API Key and API access token code will created
- Will see the documentation
