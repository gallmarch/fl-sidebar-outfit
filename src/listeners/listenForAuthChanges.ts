import axios from 'axios';

const CHECK_LOCAL_STORAGE_INTERVAL = 100;

export default function listenForAuthChanges() {
  window.setInterval(checkLocalStorage, CHECK_LOCAL_STORAGE_INTERVAL);
}

function checkLocalStorage() {
  const token = window.localStorage.access_token || window.sessionStorage.access_token;
  if (token) {
    setAuthHeader(token);
    return;
  } 
  unsetAuthHeader();
}

function setAuthHeader(token: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${token.replace(/"/g, '')}`;
}

function unsetAuthHeader() {
  delete axios.defaults.headers.common.Authorization;
}
