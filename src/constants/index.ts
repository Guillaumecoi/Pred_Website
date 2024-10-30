// index.ts
import { Content, HomeContent, TeamContent, ScienceContent } from './types';
import { 
    pages as realPages,
    content as realContent,
    homeContent as realHomecontent,
    teamContent as realTeamContent,
    scienceContent as realScienceContent
} from './content';
import { 
    pages as dummyPages,
    content as dummyContent,
    homeContent as dummyHomecontent,
    teamContent as dummyTeamContent,
    scienceContent as dummyScienceContent
} from './dummy';

const content: Content = process.env.USE_REAL_CONTENT === 'true' ? realContent : dummyContent;

export const pages = process.env.USE_REAL_CONTENT === 'true' ? realPages : dummyPages;
export const homecontent: HomeContent = process.env.USE_REAL_CONTENT === 'true' ? realHomecontent : dummyHomecontent;
export const teamContent: TeamContent = process.env.USE_REAL_CONTENT === 'true' ? realTeamContent : dummyTeamContent;
export const scienceContent: ScienceContent = process.env.USE_REAL_CONTENT === 'true' ? realScienceContent : dummyScienceContent;

export const { navigation, logo: navbarlogo, footer } = content;