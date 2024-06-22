import { getSession } from "@/library/auth/getSessions";
import { COOKIE_KEYS } from "@/library/enum/cookie-keys";
import { URL_ENUM } from "@/library/enum/url-enum";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
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
  const session = await getSession();
  console.log("====================================");
  console.log(session.token.expires_at * 1000);
  console.log("====================================");
  if (Date.now() > session.token.expires_at * 1000) {
    return await getRefreshToken();
  }
  return session.token.access_token;
};

export const getRefreshToken = async (): Promise<string> => {
  // refresh token that has been previously stored
  const refreshToken = cookies().get(COOKIE_KEYS.REFRESH_TOKEN)?.value;
  const url = "https://accounts.spotify.com/api/token";

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken ?? "",
      client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
    }),
  };
  const body = await fetch(url, payload);
  const response = await body.json();

  console.log("====================================");
  console.log("GETTING REFRESHED TOKEN: ", response);
  console.log("====================================");

  cookies().set(COOKIE_KEYS.ACCESS_TOKEN, response.accessToken);
  cookies().set(COOKIE_KEYS.REFRESH_TOKEN, response.refreshToken);
  return response.accessToken;
};

export const fetchGet = async <T>(url: string, params?: any): Promise<T> => {
  const token = await handleCheckToken();
  try {
    const response = await fetch(BASE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });

    return await handleResponse<T>(response);
  } catch (error) {
    console.log("Fetch GET Error:", (error as Error).message);
    throw error;
  }
};
export const fetchDelete = async <T>(url: string, body?: any): Promise<T> => {
  const token = cookies().get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

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
  const token = cookies().get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

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
  const token = cookies().get(COOKIE_KEYS.ACCESS_TOKEN)?.value;

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
