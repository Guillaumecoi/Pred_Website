// index.ts
import { Content, HomeContent, TeamContent } from './types';
import { content as realContent, homeContent as realHomecontent, teamContent as realTeamContent } from './content';
import { content as dummyContent, homeContent as dummyHomecontent, teamContent as dummyTeamContent } from './dummy';

export const content: Content = process.env.USE_REAL_CONTENT === 'true' ? realContent : dummyContent;
export const homecontent: HomeContent = process.env.USE_REAL_CONTENT === 'true' ? realHomecontent : dummyHomecontent;
export const teamContent: TeamContent = process.env.USE_REAL_CONTENT === 'true' ? realTeamContent : dummyTeamContent;

export const { navigation } = content;