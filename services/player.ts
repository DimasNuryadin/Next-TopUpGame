import callApi from "../config/api";

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