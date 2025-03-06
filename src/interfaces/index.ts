export interface IPersonalProject {
  title: string;
  linkToPage: string;
  image: string;
  description?: string;
}
export interface PersonalProjectComponent extends IPersonalProject {
  background: string;
}
