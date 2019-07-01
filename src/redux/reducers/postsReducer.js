export default (state=[], action ) => {
  switch( action.type ) {
    case 'FETCH_POSTS_SUCCESSFUL':
      return action.payload
    case 'FETCH_POSTS_FAILURE':
      return state
    default:
      return state
  }
}
