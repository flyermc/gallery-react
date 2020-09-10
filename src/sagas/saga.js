import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getImagesRequest,
  getArchiveRequest,
  getHotImageRequest,
  getLikeRequest,
  setLikeRequest,
  deleteLikeRequest,
} from '../services/galleryService';
import {
  IMAGES_REQUESTED,
  HOT_IMAGE_REQUESTED,
  LIKE_REQUESTED,
  LIKE_SET_REQUEST,
  LIKE_DELETE_REQUEST,
  imagesFetched,
  archiveFetched,
  hotImageFetched,
  likeFetched,
  setLikeSuccess,
  deleteLikeSuccess,
  imagesFetchFailed,
  archiveFetchFailed,
  hotImageFetchFailed,
  ARCHIVE_REQUESTED,
} from '../store/actions';

function* fetchImages() {
  try {
    const images = yield call(getImagesRequest);
    yield put(imagesFetched(images));
  } catch (e) {
    yield put(imagesFetchFailed(e.message));
  }
}

function* fetchArchive(data) {
    try {
        console.log(data)
        const images = yield call(getArchiveRequest, data.params)
        yield put(archiveFetched(images))
    } catch (e) {
      yield put(archiveFetchFailed(e.message));
    }
}

function* fetchHotImage() {
  try {
    const image = yield call(getHotImageRequest);
    yield put(hotImageFetched(image))
  } catch (e) {
    yield put(hotImageFetchFailed(e.message));
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
    console.log(data)
    const response = yield call(setLikeRequest, data.uuid);
    if (response.status === 201 || response.status === 304) {
      yield put(setLikeSuccess(data.uuid));
    }
  } catch (e) {
    console.log('Cannot set like for image: ' + e.message);
  }
}

function* deleteLikeSaga(data) {
  try {
    console.log(data)
    const response = yield call(deleteLikeRequest, data.uuid);
    if (response.status === 204) {
      console.log(`Response status: ${response.status}`)
      yield put(deleteLikeSuccess(data.uuid));
    }
  } catch (e) {
    console.log('Cannot delete like for image: ' + e.message);
  }
}

function* imagesSaga() {
  yield takeLatest(IMAGES_REQUESTED, fetchImages);
  yield takeLatest(ARCHIVE_REQUESTED, fetchArchive)
  yield takeLatest(HOT_IMAGE_REQUESTED, fetchHotImage);
  yield takeLatest(LIKE_REQUESTED, fetchLike);
  yield takeLatest(LIKE_SET_REQUEST, setLike);
  yield takeLatest(LIKE_DELETE_REQUEST, deleteLikeSaga);
}

export default imagesSaga;
