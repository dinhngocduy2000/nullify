import { COOKIE_KEYS } from "@/library/enum/cookie-keys";
import { URL_ENUM } from "@/library/enum/url-enum";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const token = cookies().get(COOKIE_KEYS.ACCESS_TOKEN)?.value;
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
export const fetchGet = async <T>(url: string, params?: any): Promise<T> => {
  try {
    const response = await fetch(BASE_URL + url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    });
    console.log("====================================");
    console.log("CHECKING API RESPONSE: ", response);
    console.log("====================================");
    return await handleResponse<T>(response);
  } catch (error) {
    console.log("Fetch GET Error:", (error as Error).message);
    throw error;
  }
};
export const fetchDelete = async <T>(url: string, body?: any): Promise<T> => {
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
