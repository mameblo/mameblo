export type Stylist = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  stylist_id: number;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  subTitle: string;
  tag: string;
  profile: string;
  body: string;
  url: string;
  style1: {
    url: string;
    height: number;
    width: number;
  };
  style2: {
    url: string;
    height: number;
    width: number;
  };
  style3: {
    url: string;
    height: number;
    width: number;
  };
  description: string;
  keyword: string;
};
