import { mongodbConnect, timeModel } from "@db/index";
import type { TimeRegister } from "@shared/types";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  const email = params.email;
  try {
    await mongodbConnect();

    const timeDate: TimeRegister | null = await timeModel.findOne({ email });
    return new Response(JSON.stringify(timeDate), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error" }), {
      status: 404,
    });
  }
};
