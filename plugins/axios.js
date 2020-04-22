

export default function({ store, $axios, redirect, app }) {
  $axios.onRequest(config => {
    console.log('[onRequest]', config.url);
  });

  $axios.onResponse(response => {
    console.log("[onResponse]");

  }, err => {
    return Promise.reject(err.response);
  });

  $axios.onRequestError(err => {
    console.log('[onRequestError]');
  });

  $axios.onResponseError(error => {
    console.log('[onResponseError]');

  });

  $axios.onError(error => {
    console.log('[onError]');
  });
}
