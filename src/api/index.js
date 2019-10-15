import { ApiConstants } from "./Apiconstants";
/*
 * HTTP Request for non fileupload APIs
-----------------------------------------------------------------------------------------
Programmer  Date               in Ver.    Changes    
-----------------------------------------------------------------------------------------   
Midhun     21/03/2019          v.0.1       HTTP Request for non fileupload APIs
-----------------------------------------------------------------------------------------
*/

// General api to access data from web
const url = ApiConstants.BASE_URL;
export default function api(path, params, method, accessToken) {
  let options = null;
  if (accessToken) {
    options = Object.assign(
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          Authorization: accessToken
        }
      },
      {
        method: method
      },
      params
        ? {
            body: JSON.stringify(params)
          }
        : null
    );
  } else {
    options = Object.assign(
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      },
      {
        method: method
      },
      params
        ? {
            body: JSON.stringify(params)
          }
        : null
    );
  }

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
    .then(json => json);
}
