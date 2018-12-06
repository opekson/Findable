import React from 'react';
import styles from '../styles'
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { getCards } from '../redux/actions';
import SwipeCards from 'react-native-swipe-cards';
import Cards from '../components/Cards';
import NoCards from '../components/NoCards';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    this.props.dispatch(getCards(this.props.user.geocode));
  }

  handleYup (card) {
    firebase.database().ref('cards/' + this.props.user.id + '/swipes').update({ [card.id]: true });
    this.checkMatch(card);
  }
  handleNope (card) {
    firebase.database().ref('cards/' + this.props.user.id + '/swipes').update({ [card.id]: false });
  }

  checkMatch(card){
    firebase.database().ref('cards/' + card.id + '/swipes/' + this.props.user.id).once('value', (snap) => {
      if(snap.val() == true){
        const me = {
          id: this.props.user.id,
          photoUrl: this.props.user.photoUrl,
          name: this.props.user.shownName || this.props.user.name
        }
        const user = {
          id: card.id,
          photoUrl: card.photoUrl,
          name: card.shownName || card.name
        }
        firebase.database().ref('cards/' + this.props.user.id + '/chats/' + card.id).set({ user:user });
        firebase.database().ref('cards/' + card.id + '/chats/' + this.props.user.id).set({ user:me })
      }
    })
  }

  render() {
    return (
      <SwipeCards
        cards={this.props.cards}
        stack={false}
        renderCard={(cardData) => <Cards {...cardData} />}
        renderNoMoreCards={() => <NoCards />}
        showYup={false}
        showNope={false}
        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope.bind(this)}
        handleMaybe={this.handleMaybe}
        hasMaybeAction={false}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
    cards: state.cards,
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);