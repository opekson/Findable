import React from 'react';
import * as firebase from 'firebase';
import styles from '../styles';
import { connect } from 'react-redux';

import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

class Matches extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chats: []
    }
  }

  componentDidMount(){
    firebase.database().ref('cards/' + this.props.user.id + '/chats').on('value', (snap) => {
      let items = [];
      snap.forEach((child) => {
        item = child.val();
        items.push(item);
      })
      this.setState({ chats: items.reverse() });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.chats.map((uri, key) => {
            return (
              <TouchableOpacity style={[styles.matchImgRow, styles.border]} key={key} 
              onPress={() => this.props.navigation.navigate("Chat", {user: uri.user})}
              >
                <Image style={styles.matchPic} source={{ uri:  uri.user.photoUrl  }} />
                <Text style={[styles.bold, styles.center]}>
                { uri.user.name} 
                </Text> 
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    cards: state.cards, 
    user: state.user
  };
}

export default connect(mapStateToProps)(Matches);