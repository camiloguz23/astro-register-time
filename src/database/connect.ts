import mongoose from "mongoose";

const database = import.meta.env.DATABASE; //process.env.DATABASE ?? ''

export const mongodbConnect = async () => {
  await mongoose.connect(database);
};
