import { mongodbConnect, timeModel } from "@db/index";
import type { TimeRegister } from "@shared/types";
import type {
  UpdateActionModel,
  UpdateYearModel,
  UpdateMonthModel,
} from "@shared/types";
import { type APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request, redirect }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const email = searchParams.get("email");
  try {
    await mongodbConnect();
    const timeDate: TimeRegister | null = await timeModel.findOne({
      email,
    });
    return new Response(JSON.stringify(timeDate), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error" }), {
      status: 404,
    });
  }
};

// export const POST: APIRoute = async ({ request }) => {
//   const data = await request.json();
//   console.log("response", data);
//   return new Response(JSON.stringify(data), {
//     status: 200,
//   });
// };

const setMonth = async ({ _id, month }: UpdateMonthModel) => {
  const update = await timeModel.updateOne({ _id }, { $set: month });
  update.modifiedCount;
  return !!update.modifiedCount;
};

const setYear = async ({ _id, year }: UpdateYearModel) => {
  const updateYear = await timeModel.findOneAndUpdate({ _id }, { $set: year });
  return updateYear;
};

export const PUT: APIRoute = async ({ request, redirect }) => {
  const { _id, month, year }: UpdateActionModel = await request.json();
  try {
    await mongodbConnect();
    const isUpdate = await setMonth({ _id, month });
    const isUpdateYear = await setYear({ _id, year });
    console.log("🚀 ~ constPUT:APIRoute= ~ isUpdateYear:", isUpdateYear);
    return new Response(
      JSON.stringify({ message: isUpdate && isUpdateYear ? "ok" : "error" }),
      {
        status: isUpdate && isUpdateYear ? 200 : 404,
        statusText: "error",
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: error }), {
      status: 404,
      statusText: "error",
    });
  }
};
