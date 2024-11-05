// index.ts
import { Content, ScienceContent } from './types';
import { 
    pages as realPages,
    content as realContent,
    scienceContent as realScienceContent
} from './content';
import { 
    pages as dummyPages,
    content as dummyContent,
    scienceContent as dummyScienceContent
} from './dummy';

const content: Content = process.env.USE_REAL_CONTENT === 'true' ? realContent : dummyContent;

export const pages = process.env.USE_REAL_CONTENT === 'true' ? realPages : dummyPages;
export const scienceContent: ScienceContent = process.env.USE_REAL_CONTENT === 'true' ? realScienceContent : dummyScienceContent;

export const { navbar, footer } = content;