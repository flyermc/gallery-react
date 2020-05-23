import { call, put, takeLatest } from 'redux-saga/effects';
import { getImagesRequest, getLikeRequest, setLikeRequest, deleteLikeRequest } from '../services/galleryService';
import {
  IMAGES_REQUESTED,
  imagesFetched,
  likeFetched,
  setLikeSuccess,
  imagesFetchFailed,
  LIKE_REQUESTED,
  LIKE_SET_REQUEST,
  LIKE_DELETE_REQUEST,
} from '../store/actions';

function* fetchImages() {
  try {
    const images = yield call(getImagesRequest);
    yield put(imagesFetched(images));
  } catch (e) {
    yield put(imagesFetchFailed(e.message));
  }
}

function* fetchLike(data) {
  try {
    const response = yield call(getLikeRequest, data.uuid);
    const storePayload = {
      image: data.uuid,
      like: response.status === 200,
    };
    yield put(likeFetched(storePayload));
  } catch (e) {
    console.log('Cannot get like for image: ' + e.message);
  }
}

function* setLike(data) {
  try {
    const response = yield call(setLikeRequest, data.uuid);
    if (response.status === 201 || response.status === 304) {
      yield put(setLikeSuccess(data.uuid));
    }
  } catch (e) {
    console.log('Cannot set like for image: ' + e.message);
  }
}

function* deleteLike(data) {

}

function* imagesSaga() {
  yield takeLatest(IMAGES_REQUESTED, fetchImages);
  yield takeLatest(LIKE_REQUESTED, fetchLike);
  yield takeLatest(LIKE_SET_REQUEST, setLike);
  yield takeLatest(LIKE_DELETE_REQUEST, deleteLike);
}

export default imagesSaga;
