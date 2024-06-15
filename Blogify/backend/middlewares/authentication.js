import { validateToken } from "../services/authentication.js";

export function checkForAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return next();
    }

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {
      // Handle token validation error if needed
      console.error("Error validating token:", error.message);
    }
    return next();
  };
}
