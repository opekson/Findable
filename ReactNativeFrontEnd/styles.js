import React from 'react';
import { StyleSheet } from 'react-native';
const Dimensions = require('Dimensions');
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
	  borderWidth: 1,
	  borderColor: '#4267b2',
    backgroundColor: '#4267b2',
    padding: 20,
	  fontSize: 18,
    fontWeight: 'bold',
  },
  facebook:{
    color: '#fff'
  },
  color: {
  	color: '#FFC966'
  },
  profilePic:{
    width: 90,
    height: 90,
    marginTop: 20,
    marginLeft: 50,
  	borderRadius: 45,
  	backgroundColor: '#fff',
    justifyContent: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  img: {
  	width: 90,
  	height: 90,
  	borderRadius: 45,
    margin: 10,
    backgroundColor: '#fff',
  },
  imgRow: {
		flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
		paddingLeft: 80,
  },
  matchImgRow:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 15,
  },
  matchPic: {
    width: 90,
    height: 90,
    margin: 10,
  	borderRadius: 45,
  	backgroundColor: '#fff',
    justifyContent: 'center'
  },
  textInput: {
    width: deviceWidth*.92,
    padding: 15,
    backgroundColor: '#fff',
    height: 100
  },
  textShownName: {
    width: deviceWidth*.6,
    height: 20,
    backgroundColor: '#fff',
    textAlign: 'center'
  },  
  bold: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
	  borderRadius: 15,
	  borderWidth: 1,
	  borderColor: '#FFC966',
	  textAlign: 'center',
    color: '#000',
    backgroundColor: '#FFC966',
	  padding: 15,
	  margin: 15,
	  fontSize: 18,
	  fontWeight: 'bold',
  },
  card: {
    width: deviceWidth*.9,
    height: deviceHeight*.7
  },
  cardDescription: {
    padding: 15,
    justifyContent: 'flex-end',
    flex: 1,
  },
  cardInfo: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  aboutMe: {
    marginLeft: 10,
  },
  border: {
    borderTopColor: '#000',
    borderTopWidth: 1
  }
})

module.exports = styles