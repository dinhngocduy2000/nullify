import { COOKIE_KEYS } from "@/library/enum/cookie-keys";
import { URL_ENUM } from "@/library/enum/url-enum";
import { REFRESH_TOKEN_INTERFACE } from "@/library/interface/auth/refresh-token";
import { getCookies } from "next-client-cookies/server";
import { redirect } from "next/navigation";

export const checkTokenExpiration = (response: Response): void => {
  if (response.status === 401 || response.status === 403) {
    return redirect(URL_ENUM.LOGIN);
  }
};
const BASE_URL = process.env.BASE_URL;
export const handleResponse = async <T>(response: Response): Promise<T> => {
  checkTokenExpiration(response);

  return response.json();
};

const handleCheckToken = async () => {
  const cookie = getCookies();
  const token = cookie.get(COOKIE_KEYS.ACCESS_TOKEN);
  const expires_at = cookie.get(COOKIE_KEYS.EXPIRES_AT);

  if (Date.now() > Number(expires_at) || !token || !expires_at) {
    return await getRefreshToken();
  } else {
    return token;
  }
};

export const getRefreshToken = async (): Promise<string> => {
  // refresh token that has been previously stored
  const cookie = getCookies();
  const refreshToken = cookie.get(COOKIE_KEYS.REFRESH_TOKEN);
  const url = "https://accounts.spotify.com/api/token";
  console.log("====================================");
  console.log("GETTING REFRESH TOKEN IN API");
  console.log("====================================");
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken ?? "",
      client_id: process.env.CLIENT_ID ?? "",
      client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
    }),
  };
  const body = await fetch(url, payload);
  const response: REFRESH_TOKEN_INTERFACE = await body.json();
  return response.access_token;
};

export const fetchGet = async <T>(url: string, params?: any): Promise<T> => {
  const token = await handleCheckToken();

  console.log(`CHECKING FETCH GET TOKEN: ${token}`);
  console.log(`CHECKING FETCH GET URL: ${BASE_URL + url}`);
  console.log(`CHECKING FETCH GET PARAMS: ${params}`);
  console.log("====================================");
  try {
    const response = await fetch(BASE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });
    const jsonRes = await handleResponse<T>(response);
    console.log("====================================");
    console.log("CHECKING FETCH GET RESPONSE: ", jsonRes);
    console.log("====================================");
    return jsonRes;
  } catch (error) {
    console.log("Fetch GET Error:", (error as Error).message);
    throw error;
  }
};
export const fetchDelete = async <T>(url: string, body?: any): Promise<T> => {
  const token = await handleCheckToken();

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    return await handleResponse<T>(response);
  } catch (error) {
    console.error("Fetch DELETE Error:", (error as Error).message);
    throw error;
  }
};
export const fetchPut = async <T>(url: string, data: any): Promise<T> => {
  const token = handleCheckToken();

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return await handleResponse<T>(response);
  } catch (error) {
    console.error("Fetch PUT Error:", (error as Error).message);
    throw error;
  }
};
export const fetchPost = async <T>(url: string, data: any): Promise<T> => {
  const token = handleCheckToken();

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    return await handleResponse<T>(response);
  } catch (error) {
    console.error("Fetch POST Error:", (error as Error).message);
    throw error;
  }
};
