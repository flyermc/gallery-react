import { call, put, takeLatest } from 'redux-saga/effects';
import * as APIService from '../services/galleryService';
import IMAGES_REQUESTED from '../store/actions';

function* fetchImages(action) {
    try {
       const images = yield call(APIService.getImages);
       yield put({type: "IMAGES_FETCH_SUCCEEDED", images: images});
    } catch (e) {
       yield put({type: "IMAGES_FETCH_FAILED", message: e.message});
    }
 }

 function* imagesSaga() {
    yield takeLatest(IMAGES_REQUESTED, fetchImages);
 }

 export default imagesSaga;