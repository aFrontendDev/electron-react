import React from 'react';
import { medScreenMQMin } from '../../app_config/config';

type Props = {
  imgLoaded?: () => void;
  imgFailed?: () => void;
  altText?: string;
  smallImg?: string;
  largeImg?: string;
};

const Picture = (props: Props) => {
  const { largeImg, smallImg, altText, imgLoaded, imgFailed } = props;
  const large = largeImg || smallImg;
  const small = smallImg || largeImg;

  if (!large && !small) {
    return null;
  }

  const handleImgLoaded = () => {
    if (imgLoaded && typeof imgLoaded === 'function') {
      imgLoaded();
    }
  };

  const handleImgError = () => {
    if (imgFailed && typeof imgFailed === 'function') {
      imgFailed();
    }
  };

  return (
    <picture>
      <source media={medScreenMQMin} srcSet={large} />
      <img
        onLoad={handleImgLoaded}
        onError={handleImgError}
        srcSet={small}
        src={large}
        alt={altText}
      />
    </picture>
  );
};
export default Picture;
