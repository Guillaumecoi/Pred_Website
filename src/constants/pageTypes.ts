import { Hero, SocialProof, PromotionalVideo, TeamMember, PictureTransformation, Introduction } from './types';

export interface HomeContent {
    hero: Hero;
    socialProof: SocialProof[];
    promotionalVideo: PromotionalVideo;
  }

export interface TeamContent {
    hero: Hero;
    members: TeamMember[];
  }
  
  // Science page content
  
  export interface ScienceContent {
    hero: Hero;
    pictureTransformations: PictureTransformation[];
    introduction?: Introduction;
  }