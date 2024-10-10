// index.ts
import { Content, HomeContent } from './types';
import { content as realContent, homeContent as realHomecontent } from './index.content';
import { content as dummyContent, homeContent as dummyHomecontent } from './index.dummy';

export const content: Content = process.env.USE_REAL_CONTENT === 'true' ? realContent : dummyContent;
export const homecontent: HomeContent = process.env.USE_REAL_CONTENT === 'true' ? realHomecontent : dummyHomecontent;

export const { navigation } = content;