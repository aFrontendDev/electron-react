import { fetchReqType, fetchGetType, fetchPostType } from 'types/fetch.type';
import { jsonObjectType } from 'types/generics.type';

const converToQS = (obj: jsonObjectType) =>
  Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

export const request = async (data: fetchReqType) => {
  const { url, params, method = 'GET' } = data || {};
  let fetchUrl = `${url}`;

  const options: RequestInit = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };

  if (params) {
    if (method === 'GET') {
      const paramsString: string = converToQS(params);
      fetchUrl = `${url}?${paramsString}`;
    } else {
      options.body = JSON.stringify(params);
    }
  }

  const response = await fetch(fetchUrl, options);

  if (response.status !== 200) {
    // TODO error logging
    return {
      status: response.status,
      message: `Unexpected response: ${response.statusText}`
    };
  }

  const result = await response.json();
  return {
    status: 200,
    content: result
  };
};

export const getReq = ({ url, params }: fetchGetType) =>
  request({ url, params });

export const postReq = ({ url, params }: fetchPostType) =>
  request({ url, params, method: 'POST' });
