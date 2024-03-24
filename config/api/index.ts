import axios, { AxiosRequestConfig } from "axios";

export default async function callApi({url, method, data}: AxiosRequestConfig) {   // Tipe validasi bisa pakai axios
  const response = await axios({
    url,
    method,
    data,
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