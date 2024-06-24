# installation Guide for firebase:

PS C:\Users\krish\Desktop\netflix-gpt> firebase login
firebase : File C:\Users\krish\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system. For more information,
see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1

- firebase login
- ```
      + CategoryInfo          : SecurityError: (:) [], PSSecurityException
  PS C:\Users\krish\Desktop\netflix-gpt> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  >>
  PS C:\Users\krish\Desktop\netflix-gpt> firebase login
  i  Firebase optionally collects CLI and Emulator Suite usage and error reporting information to help improve our products. Data is collected in accordance with Google's privacy policy (https://policies.google.com/privacy) and is not used to identify you.
  ```

? Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? Yes
i To change your data collection preference at any time, run `firebase logout` and log in again.

Visit this URL on this device to log in:
https://accounts.google.com/o/oauth2/auth?client_id=563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com&scope=email%20openid%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloudplatformprojects.readonly%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Ffirebase%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform&response_type=code&state=299397555&redirect_uri=http%3A%2F%2Flocalhost%3A9005

Waiting for authentication...

- Success! Logged in as shanmugakrishnan12@gmail.com
  PS C:\Users\krish\Desktop\netflix-gpt> firebase init

       ######## #### ########  ######## ########     ###     ######  ########
       ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
       ######    ##  ########  ######   ########  #########  ######  ######
       ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
       ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

C:\Users\krish\Desktop\netflix-gpt

? Are you ready to proceed? Yes
? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure
files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: netflixgpt-8af00 (NetflixGPT)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? No

- Wrote build/404.html
- Wrote build/index.html

i Writing configuration info to firebase.json...
i Writing project information to .firebaserc...

- Firebase initialization complete!
  PS C:\Users\krish\Desktop\netflix-gpt> npm run build

> netflix-gpt@0.1.0 build
> react-scripts build

Creating an optimized production build...
One of your dependencies, babel-preset-react-app, is importing the
"@babel/plugin-proposal-private-property-in-object" package without
declaring it in its dependencies. This is currently working because
"@babel/plugin-proposal-private-property-in-object" is already in your
node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which
is not maintianed anymore. It is thus unlikely that this bug will
ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
your devDependencies to work around this error. This will make this message
go away.

Compiled successfully.

63.37 kB build\static\js\main.491c2189.js
1.9 kB build\static\css\main.f09daed0.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

npm install -g serve
serve -s build

Find out more about deployment here:

https://cra.link/deployment
PS C:\Users\krish\Desktop\netflix-gpt> firebase deploy
