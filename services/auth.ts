import { LoginTypes } from "./data-types";
import callApi from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

// POST Sign-Up
export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callApi({
    url,
    method: 'POST',
    data,
  })
}

// POST Sign-In
export async function setSignIn(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callApi({
    url,
    method: 'POST',
    data,
  });
}