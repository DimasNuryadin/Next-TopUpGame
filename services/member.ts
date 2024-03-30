import callApi from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

// GET Dashboard Overview
export async function getMemberOverview() {
  const url = `${ROOT_API}/${API_VERSION}/players/dashboard`;

  return callApi({
    url,
    method: 'GET',
    token: true,
  })
}

