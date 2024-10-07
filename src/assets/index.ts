import { images as realImages } from './private/index';
import { images as dummyImages } from './dummy/index';
import { Images } from './types';

let images : Images;

if (process.env.USE_REAL_CONTENT === 'true') {
  images = realImages;
} else {
  images = dummyImages;
}

export const { logo, logoBlack, logoWhite } = images;