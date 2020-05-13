import {
   call,
   put,
   takeLatest
} from 'redux-saga/effects';
import {
   getImages
} from '../services/galleryService';
import {
   IMAGES_REQUESTED,
   imagesFetched,
   imagesFetchFailed
} from '../store/actions';

function* fetchImages(action) {
   try {
      const images = yield call(getImages);
      yield put(imagesFetched(images));
   } catch (e) {
      yield put(imagesFetchFailed(e.message));
   }
}

function* imagesSaga() {
   yield takeLatest(IMAGES_REQUESTED, fetchImages);
}

export default imagesSaga;