import { call, put, takeLatest } from 'redux-saga/effects';
import { getImages, getLike, setLike } from '../services/galleryService';
import {
  IMAGES_REQUESTED,
  imagesFetched,
  likeFetched,
  imagesFetchFailed,
  LIKE_REQUESTED,
  LIKE_POSTED,
} from '../store/actions';

function* fetchImages() {
  try {
    const images = yield call(getImages);
    yield put(imagesFetched(images));
  } catch (e) {
    yield put(imagesFetchFailed(e.message));
  }
}

function* fetchLike(data) {
  try {
    const response = yield call(getLike, data.uuid);
    const storePayload = {
      image: data.uuid,
      like: response.status === 200,
    };
    yield put(likeFetched(storePayload));
  } catch (e) {
    console.log('Cannot get like for image: ' + e.message);
  }
}

function* changeLike(data) {
  try {
    const response = yield call(setLike, data.uuid);

  } catch (e) {
    console.log('Cannot set like for image: ' + e.message);
  }
}

function* imagesSaga() {
  yield takeLatest(IMAGES_REQUESTED, fetchImages);
  yield takeLatest(LIKE_REQUESTED, fetchLike);
  yield takeLatest(LIKE_POSTED, changeLike);
}

export default imagesSaga;
