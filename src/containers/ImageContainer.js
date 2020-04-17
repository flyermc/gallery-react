import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Image, ImageDetails } from '../components';
import { imagesSelector } from '../selectors/imagesSelector';

import { requestImages } from '../store/actions';

import { Container } from './styled';

const ImageContainer = ({ images, currentImage }) => {
    let dispatch = useDispatch();
    images || dispatch(requestImages());
    
    return (
        <Fragment>
            { !currentImage && images &&
              <Container>
              { 
                  images.map(({ photo_preview, uuid }) => (
                    <Image imageSrc={photo_preview} id={uuid} />
                  ))
              }
              </Container>
            }
            { !!currentImage && <ImageDetails /> }
        </Fragment>
    )
};

ImageContainer.propTypes = {
    currentImage: PropTypes.string,
    images: PropTypes.array,
}

ImageContainer.defaultProps = {
    currentImage: null,
}

const mapStateToProps = createStructuredSelector({
    images: imagesSelector,
});

export default connect(mapStateToProps)(ImageContainer);
