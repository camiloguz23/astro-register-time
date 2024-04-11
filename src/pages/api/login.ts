import { mongodbConnect, timeModel } from "@db/index";
import type { TimeRegister } from "@shared/types";
import type { APIContext, APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }: APIContext) => {
  const email: { email: string } = await request.json();
  try {
    await mongodbConnect();
    const timeDate: TimeRegister | null = await timeModel.findOne(email);
    cookies.set("user", timeDate.email, { path: "/" });
    return new Response(JSON.stringify(timeDate), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error" }), {
      status: 404,
    });
  }
};
