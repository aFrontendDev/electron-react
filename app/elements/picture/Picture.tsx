import React from 'react';
import { medScreenMQMin } from '../../app_config/config';

type Props = {
  imgLoaded?: () => void;
  altText?: string;
  smallImg?: string;
  largeImg: string;
};

const Picture = (props: Props) => {
  const { largeImg, smallImg, altText, imgLoaded } = props;
  console.log({ props });
  const large = largeImg || smallImg;
  const small = smallImg || largeImg;

  const handleImgLoaded = () => {
    if (imgLoaded && typeof imgLoaded === 'function') {
      imgLoaded();
    }
  };

  return (
    <picture>
      <source media={medScreenMQMin} srcSet={large} />
      <img onLoad={handleImgLoaded} srcSet={small} src={large} alt={altText} />
    </picture>
  );
};
export default Picture;
