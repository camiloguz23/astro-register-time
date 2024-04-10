import { type APIContext } from "astro";

export function onRequest(
  { locals, request, url, cookies, redirect }: APIContext,
  next
) {
  locals.title = "Nuevo título";
  if (url.pathname.includes("/register")) {
    const isLogin = cookies.get("user")?.value ?? "";
    isLogin || redirect("/");
  }
  return next();
}
