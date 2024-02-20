import { config } from "dotenv";
import { cleanEnv, num, str } from "envalid";

config();

export const env = cleanEnv(process.env, { SESSION: str(), API_ID: num(), API_HASH: str() });
