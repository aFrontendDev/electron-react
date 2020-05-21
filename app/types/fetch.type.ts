import { jsonObjectType } from 'types/generics.type';

export type fetchReqType = {
  url: string;
  params?: jsonObjectType;
  method?: string;
};

export type fetchGetType = {
  params?: jsonObjectType;
  url: string;
};

export type fetchPostType = {
  params?: jsonObjectType;
  url: string;
};
