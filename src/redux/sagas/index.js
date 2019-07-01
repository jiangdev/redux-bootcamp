import { put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

function* getPosts() {
  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/posts')
    const newAction = {
      type: 'FETCH_POSTS_SUCCESSFUL',
      payload: response.data
    }
    yield put(newAction);

  } catch(e) {
    const errorAction = {
      type: 'FETCH_POSTS_FAILURE',
    }
    yield put(errorAction)
  }
}

function* mySaga() {
  yield takeLatest("FETCH_POST_REQUEST", getPosts);
}

export default mySaga
