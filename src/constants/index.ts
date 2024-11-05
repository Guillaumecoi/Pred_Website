// index.ts
import { Content } from './types';
import { 
    pages as realPages,
    content as realContent,
} from './private/content';
import { 
    pages as dummyPages,
    content as dummyContent,
} from './dummy/content';

const content: Content = process.env.USE_REAL_CONTENT === 'true' ? realContent : dummyContent;
export const pages = process.env.USE_REAL_CONTENT === 'true' ? realPages : dummyPages;
export const { navbar, footer } = content;