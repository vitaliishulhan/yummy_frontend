import { Axios } from "axios";

const client = new Axios({
  baseURL: import.meta.env.VITE_SERVER_BASEPATH,
  responseType: 'json',
  responseEncoding: 'utf-8',
  transformResponse: (res) => JSON.parse(res),
});

export default client;