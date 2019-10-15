import { ApiConstants } from "./Apiconstants";
import * as mimePack from "mime";
/*
 * HTTP Request for file dowload file from response
-----------------------------------------------------------------------------------------
Programmer  Date               in Ver.    Changes    
-----------------------------------------------------------------------------------------   
Midhun     21/03/2019          v.0.0       HTTP Request for file dowload file from response
-----------------------------------------------------------------------------------------
*/
// General api to access data from web
const url = ApiConstants.BASE_URL;
export default function fileDownload(path, params, accessToken) {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      // 'Content-Type': 'multipart/form-data;',
      Authorization: accessToken
    },
    body: params,
    responseType: "blob"
  };
  let fullUrl;
  fullUrl = url + path;
  return fetch(fullUrl, options).then(async resp => {
    const mimes = resp.headers.get("content-type");
    const data = await resp.body.getReader().read();

    downloadFile(data.value, "download", mimes);
  });
}

function downloadFile(data, filename, mime) {
  // It is necessary to create a new blob object with mime-type explicitly set
  // otherwise only Chrome works like it should
  const blob = new Blob([data], {
    type: mime || "application/octet-stream"
  });
  if (typeof window.navigator.msSaveBlob !== "undefined") {
    // IE doesn't allow using a blob object directly as link href.
    // Workaround for "HTML7007: One or more blob URLs were
    // revoked by closing the blob for which they were created.
    // These URLs will no longer resolve as the data backing
    // the URL has been freed."
    window.navigator.msSaveBlob(blob, filename);
    return;
  }

  const extention = mimePack.getExtension(mime);
  filename = `${filename}.${extention}`;
  // Other browsers
  // Create a link pointing to the ObjectURL containing the blob
  const blobURL = window.URL.createObjectURL(blob);
  const tempLink = document.createElement("a");
  tempLink.style.display = "none";
  tempLink.href = blobURL;

  tempLink.setAttribute("download", filename);
  // Safari thinks _blank anchor are pop ups. We only want to set _blank
  // target if the browser does not support the HTML5 download attribute.
  // This allows you to download files in desktop safari if pop up blocking
  // is enabled.
  if (typeof tempLink.download === "undefined") {
    tempLink.setAttribute("target", "_blank");
  }
  document.body.appendChild(tempLink);
  tempLink.click();
  document.body.removeChild(tempLink);
  setTimeout(() => {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(blobURL);
  }, 100);
}
