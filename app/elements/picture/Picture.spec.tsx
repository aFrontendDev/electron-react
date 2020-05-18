/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Picture from './Picture';

Enzyme.configure({ adapter: new Adapter() });

describe('Picture element A', () => {
  const setup = () => {
    const comp = (
      <Picture
        largeImg="https://placeimg.com/640/480/people"
        smallImg="https://placeimg.com/320/250/tech"
        altText="img alt text"
      />
    );
    const app = shallow(comp);

    return {
      app,
      imgTag: app.find('img')
    };
  };

  it('should render an image tag', () => {
    const { imgTag } = setup();
    expect(imgTag).toHaveLength(1);
  });

  it('should have the correct img src', () => {
    const { imgTag } = setup();
    const src = imgTag.prop('src');
    expect(src).toBe('https://placeimg.com/640/480/people');
  });

  it('should have the correct alt text', () => {
    const { imgTag } = setup();
    const src = imgTag.prop('alt');
    expect(src).toBe('img alt text');
  });
});

describe('Picture element B', () => {
  const setup = () => {
    const comp = <Picture smallImg="https://placeimg.com/320/250/tech" />;
    const app = shallow(comp);

    return {
      app,
      imgTag: app.find('img')
    };
  };

  it('should render an image tag', () => {
    const { imgTag } = setup();
    expect(imgTag).toHaveLength(1);
  });

  it('should have the correct img src', () => {
    const { imgTag } = setup();
    const src = imgTag.prop('src');
    expect(src).toBe('https://placeimg.com/320/250/tech');
  });

  it('should have the correct alt text', () => {
    const { imgTag } = setup();
    const src = imgTag.prop('alt');
    expect(src).toBe(undefined);
  });
});

describe('Picture element null', () => {
  const setup = () => {
    const comp = <Picture />;
    const app = shallow(comp);

    return {
      app,
      imgTag: app.find('img'),
      pictureTag: app.find('picture')
    };
  };

  it('should NOT render an img tag', () => {
    const { imgTag } = setup();
    expect(imgTag).toHaveLength(0);
  });

  it('should NOT render a picture tag', () => {
    const { pictureTag } = setup();
    expect(pictureTag).toHaveLength(0);
  });
});
