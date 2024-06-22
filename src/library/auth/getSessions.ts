import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";
const BASE_AUTH: AuthRootObject = {
  user: {
    name: "",
    email: "",
    image: "",
  },
  token: {
    name: "",
    email: "",
    picture: "",
    sub: "",
    expires_at: 0,
    access_token: "",
    iat: 0,
    exp: 0,
    jti: "",
  },
};
export async function getSession(): Promise<AuthRootObject> {
  return (await getServerSession(authOptions)) ?? BASE_AUTH;
}
