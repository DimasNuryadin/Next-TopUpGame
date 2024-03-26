import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig { // Tipe validasi bisa extends pakai axios yang sudah disediakan
  token?: boolean;
}

export default async function callApi({ url, method, data, token }: CallAPIProps) {
  // Untuk call API dengan token
  let headers = {};
  if (token) {
    // Ambil Cookies
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      }
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers: headers,
  }).catch(err => err.response)

  // Jika Error
  if (response.status > 300) {
    const res = {
      error: 1,
      message: response.data.message,
      data: null,
    }
    return res;
  }

  // Jika Berhasil
  const res = {
    error: false,
    message: 'success',
    data: response.data.data,
  }
  return res;
}