import mongoose from "mongoose";
 
export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
  } catch (err) {
    console.log(err);
  }
};
