import { call, put, takeLatest } from 'redux-saga/effects';
import { getImages, getLike } from '../services/galleryService';
import {
  IMAGES_REQUESTED,
  imagesFetched,
  likeFetched,
  imagesFetchFailed,
  LIKE_REQUESTED,
} from '../store/actions';

function* fetchImages() {
  try {
    const images = yield call(getImages);
    yield put(imagesFetched(images));
  } catch (e) {
    yield put(imagesFetchFailed(e.message));
  }
}

function* fetchLike(uuid) {
  try {
    const like = yield call(getLike, uuid);
    yield put(likeFetched(like));
  } catch (e) {
    console.log('Cannot get like for image: ' + e.message);
  }
}

function* imagesSaga() {
  yield takeLatest(IMAGES_REQUESTED, fetchImages);
  yield takeLatest(LIKE_REQUESTED, fetchLike);
}

export default imagesSaga;
