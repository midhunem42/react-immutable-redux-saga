import { ApiConstants } from "./Apiconstants";
/*
 * HTTP Request for file upload APIs
-----------------------------------------------------------------------------------------
Programmer  Date               in Ver.    Changes    
-----------------------------------------------------------------------------------------   
Midhun     21/03/2019          v.0.0       HTTP Request for file upload APIs
-----------------------------------------------------------------------------------------
*/
// General api to access data from web
const url = ApiConstants.BASE_URL;
export default function fileUpload(path, params, accessToken) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      // 'Content-Type': 'multipart/form-data;',
      Authorization: accessToken
    },
    body: params
  };
  let fullUrl;
  fullUrl = url + path;
  return fetch(fullUrl, options)
    .then(resp => {
      let json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {
        const errors = {
          error: err,
          status: resp.status
        };
        throw errors;
      });
    })
    .then(json => {
      console.log(json);
      return json;
    });
}
