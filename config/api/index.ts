import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig { // Tipe validasi bisa extends pakai axios yang sudah disediakan
  token?: boolean;
  serverToken?: string;
}

export default async function callApi({ url, method, data, token, serverToken }: CallAPIProps) {
  // Untuk call API dengan token
  let headers = {};

  if (serverToken) {      // Pemanggilan token server side, contoh pada [idTrx].ts
    headers = {
      Authorization: `Bearer ${serverToken}`,
    }
  } else if (token) {     // Pemanggilan token client side
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

  const {length} = Object.keys(response.data);    // Mengubah Object menjadi array
  // Jika Berhasil
  const res = {
    error: false,
    message: 'success',
    data: length > 1 ? response.data : response.data.data,
  }
  return res;
}