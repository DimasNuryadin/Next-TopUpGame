import callApi from "../config/api";
import { CheckoutTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

// GET Landing Page
export async function getFeatureGame() {
  const url = `${ROOT_API}/${API_VERSION}/players/landingpage`;

  return callApi({
    url,
    method: 'GET',
  })
}
export async function getDetailVoucher(id: string) {
  const url = `${ROOT_API}/${API_VERSION}/players/${id}/detail`;

  return callApi({
    url,
    method: 'GET',
  })
}

// Get Sign-Up Category
export async function getGameCategory() {
  const url = `${ROOT_API}/${API_VERSION}/players/category`;

  return callApi({
    url,
    method: 'GET',
  })
}

// POST Checkout
export async function setCheckout(data: CheckoutTypes) {
  const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

  return callApi({
    url,
    method: 'POST',
    data,
    token: true,
  })
}

// GET Dashboard Overview
export async function getMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callApi({
    url,
    method: 'GET',
    token: true,
  })
}