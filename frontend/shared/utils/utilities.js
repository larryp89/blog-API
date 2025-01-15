import { removeToken } from "./localStorage";
function checkTokenExpired(response) {
  if (response === 403) {
    removeToken();
    window.location.href = "/";
    return true;
  }
}

export default checkTokenExpired;
