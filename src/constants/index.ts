// index.ts
import { Content } from './types';
import { content as realContent } from './index.content';
import { content as dummyContent } from './index.dummy';

const content: Content = process.env.USE_REAL_CONTENT === 'true' ? realContent : dummyContent;

export const { navigation, hero, callToAction } = content;