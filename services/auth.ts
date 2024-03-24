import axios from "axios";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

// POST Sign-Up
export async function setSignUp(data) {
  const URL = 'auth/signup';
  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data).catch(err => err.response)

  const axiosResponse = response.data;
  if (axiosResponse?.error === 1) {
    return axiosResponse
  }

  return axiosResponse.data;
}

// POST Sign-In
export async function setSignIn(data: LoginTypes) {
  const URL = 'auth/signin';
  const response = await axios.post(`${ROOT_API}/${API_VERSION}/${URL}`, data).catch(err => err.response)
  
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