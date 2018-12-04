import React from 'react';
import { StyleSheet } from 'react-native';
const Dimensions = require('Dimensions');
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  color: {
  	color: '#df4723'
  },
  profilePic:{
    width: 90,
    height: 90,
    marginTop: 20,
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
		paddingLeft: 40,
  },
  textInput: {
    width: deviceWidth,
    padding: 15,
    backgroundColor: '#fff',
    height: 100
  },
  bold: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
	  borderRadius: 15,
	  borderWidth: 1,
	  borderColor: '#df4723',
	  textAlign: 'center',
	  color: '#df4723',
	  padding: 15,
	  margin: 15,
	  fontSize: 18,
	  fontWeight: 'bold',
  },
  card: {
    width: deviceWidth*.9,
    height: deviceHeight*.7
  }
})

module.exports = styles