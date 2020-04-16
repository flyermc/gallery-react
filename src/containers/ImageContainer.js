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
            { !currentImage &&
              <Container>
                <Image imageSrc="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" />
                <Image imageSrc="https://ssl.gstatic.com/play-apps-publisher-rapid/fox/ebdc0e5c50a832cc2c6baf79fab2585c/fox/gwt/970D5B88B010734097B54B173E4FC446.cache.svg" />
                <Image imageSrc="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png" />
                <Image imageSrc="http://localhost:8010/media/CACHE/images/uploads/gallery/images/1564134619_0_2_3000_1690_600x0_80_0_0_9b0af28be1be2b76d43424f4c43_xmvSfa7/c4bc162982e5297589fc8a0a8b23e8af.png" />
            </Container>}
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
