import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Image, ImageDetails } from '../components';

import { openImage } from '../store/actions';
import { Container } from './styled';

const ImageContainer = ({ currentImage }) => {
    return (
        <Fragment>
            { !currentImage &&
              <Container>
              <Image imageSrc="https://www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png" />
              <Image imageSrc="https://ssl.gstatic.com/play-apps-publisher-rapid/fox/ebdc0e5c50a832cc2c6baf79fab2585c/fox/gwt/970D5B88B010734097B54B173E4FC446.cache.svg" />
              <Image imageSrc="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x.png" />
            </Container>}
            { !!currentImage && <ImageDetails /> }
        </Fragment>
    )
}

ImageContainer.propTypes = {
    currentImage: PropTypes.string,
}

const mapStateToProps = state => {
    return {
        currentImage: state.currentImage,
    }
}

export default connect(mapStateToProps)(ImageContainer);
