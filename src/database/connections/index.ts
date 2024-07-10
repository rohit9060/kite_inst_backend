import mongoose from "mongoose";
import { logger } from "@/common/config";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    logger.info("Connected to MongoDB");
  } catch (error: any) {
    logger.error(error.message);
    process.exit(1);
  }
};
