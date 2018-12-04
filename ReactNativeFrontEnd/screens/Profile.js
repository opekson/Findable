import React from 'react';
import styles from '../styles'
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Permissions } from 'expo';
import { uploadImages, deleteImage, updateAbout, logout, updateShownName } from '../redux/actions'

import { 
  Text, 
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

class Profile extends React.Component {

  deleteImage(){
    this.self.props.dispatch(deleteImage(this.self.props.user.images, this.key))
  }

  addImage(){
    enableCameraRoll();
    this.props.dispatch(uploadImages(this.props.user.images))
  }

  render() {
    return (
      <ScrollView>
        <View style={[styles.container, styles.center]}>
          <View style={styles.container}>
            <Image style={styles.profilePic} source={{uri: this.props.user.images[0]} || this.props.user.photoUrl}/>
            <Text style={[styles.center, styles.bold]} >{this.props.user.name}</Text>
          </View>
          <Text style={styles.bold}>Shown Name</Text>
          <TextInput
            style={styles.textShownName}
            multiline={false}
            onChangeText={(text) => this.props.dispatch(updateShownName(text))}
            value={this.props.user.shownName}/>
          <View style={styles.imgRow}>
            {this.props.user.images && this.props.user.images.map((uri, key)=>{
              return (
                <TouchableOpacity key={key} onPress={this.deleteImage.bind({self: this, key: key })} >
                  <Image style={styles.img} source={{uri: uri}} />
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity style={[styles.img, styles.center]} onPress={this.addImage.bind(this)}>
              <Ionicons name="ios-add" size={75}  style={styles.color} />
            </TouchableOpacity>
          </View>
          <Text style={styles.bold}>About</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            numberOfLines={5}
            onChangeText={(text) => this.props.dispatch(updateAbout(text))}
            value={this.props.user.aboutMe}/>            
        </View>
        <TouchableOpacity onPress={ () => this.props.dispatch(logout()) }>
          <Text style={ styles.button }>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

async function enableCameraRoll() {
  const permission =  await Permissions.getAsync(Permissions.CAMERA_ROLL);
  if (permission.status !== 'granted') {
    const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (newPermission.status === 'granted') {
      alert('Camera access granted')
    }
  }
}

export default connect(mapStateToProps)(Profile);