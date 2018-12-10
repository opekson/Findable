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

<img width="300" alt="login screen" src="https://user-images.githubusercontent.com/43057372/49767705-6e3f5500-fc8e-11e8-86d0-46e055c6ceea.png" >

<img width="300" alt="company card stack" src="https://user-images.githubusercontent.com/43057372/49767770-ad6da600-fc8e-11e8-9857-1061b5286d1c.png">


<img width="300" alt="profile card stack" src="https://user-images.githubusercontent.com/43057372/49767735-96c74f00-fc8e-11e8-8b07-ab0004cbed73.png">


<img width="300" alt="profile screen" src="https://user-images.githubusercontent.com/43057372/49767744-9c249980-fc8e-11e8-8fc2-b20eabec7e7a.png">

<img width="300" alt="matches screen" src="https://user-images.githubusercontent.com/43057372/49767767-aa72b580-fc8e-11e8-9235-21b4296f4cd2.png">


<img width="300" alt="messaging" src="https://user-images.githubusercontent.com/43057372/49767773-afd00000-fc8e-11e8-8de3-1d7ff437a52e.png">



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
