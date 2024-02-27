// to disable user from typing in url and getting results without being logged in

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/trips", "/reservations", "/properties", "/favourites"],
};
