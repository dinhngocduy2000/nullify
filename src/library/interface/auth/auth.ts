interface AuthRootObject {
  user: User;
  token: Token;
}

interface Token {
  name: string;
  email: string;
  picture: string;
  sub: string;
  expires_at: number;
  access_token: string;
  iat: number;
  exp: number;
  jti: string;
}

interface User {
  name: string;
  email: string;
  image: string;
}
