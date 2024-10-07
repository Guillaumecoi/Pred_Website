// index.ts
import { Content } from './types';
import { content as real } from './index.content';
import { content as dummy } from './index.dummy';

let content: Content;

if (process.env.USE_REAL_CONTENT === 'true') {
  content = real;
} else {
  content = dummy;
}

export const { navigation, hero, callToAction } = content;