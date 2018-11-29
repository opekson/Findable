export default reducers = (state = {users: ''}, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return { ...state, user: action.payload }
    }
  }
  return state;
}
  
