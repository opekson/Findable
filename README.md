# Findable

An easy way for employers and job seekers to interact


## Technnology used

- React Native
- Firbase 
- AWS
- AJAX and HTTP
- Geohashing

## Libraries used

- react-redux
- react-native-swipe-cards
- react-native-gifted-chat
- react-navigation
- latlon-geohash


## How to run: 

```
npm init
npm start
```
- Note: private database not included so some feature may not be accessible

## What the app looks like


### Using your own database: 
- 1.) Make a folder in the ReactNativeFrontEnd directory called `config`
- 2.) In the config folder makes two files: `aws.js` and `firebase.js`
- 3.) In the aws.js file setup this config (must have aws acccount using S3) 
``` js
const aws = {
  secretKey: 'YOUR SECRET KEY',
  accessKey: 'YOUR ACCESS KEY'
}

module.exports = aws;
```
- 4.) In the firebase.js file setup this config (must have firebase account)
``` js
const firebaseConfig = {
  apiKey: "YOURAPIKEY",
  authDomain: "YOURAUTHDOMAIN",
  databaseURL: "YOURDATABASEURL",
  projectId: "YOURPROJECTID",
  storageBucket: "YOURSTORAGEBUCKET",
  messagingSenderId: "YOURMESSAGINGSENDERID"
};

module.exports = firebaseConfig;
```