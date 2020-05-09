import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Image, ImageDetails, Countdown, FullScreen } from '../components';
import { imagesSelector, currentImageSelector } from '../selectors/imagesSelector';

import { requestImages } from '../store/actions';

import { Container, StyledItem } from './styled';
import { FullScreenContainer } from '../components/image/styled';

const ImageContainer = ({ images, currentImage }) => {
    let dispatch = useDispatch();
    images || dispatch(requestImages());

    return (
        <Fragment>
            { images && <FullScreen imageSrc={images[0].photo} /> }
        { images && false &&
            <Container>
            {
                images.map(({ photo_preview, uuid }, index) => (
                <StyledItem number={index}>
                    <Image imageSrc={photo_preview} id={uuid} key={uuid} number={index} />
                </StyledItem>
                ))
            }
            </Container>
        }
        { !!currentImage && <ImageDetails image={currentImage} /> }
        <Countdown />
        </Fragment>
    )
};

ImageContainer.propTypes = {
    currentImage: PropTypes.string,
    images: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
    currentImage: currentImageSelector,
    images: imagesSelector,
});

export default connect(mapStateToProps)(ImageContainer);
