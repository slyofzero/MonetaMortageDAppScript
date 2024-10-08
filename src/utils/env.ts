import dotenv from "dotenv";

export const { NODE_ENV } = process.env;
dotenv.config({
  path: NODE_ENV === "development" ? ".env" : ".env.production",
});

export const {
  VAULT_ADDRESS,
  VAULT_PRIVATE_KEY,
  FIREBASE_KEY,
  PORT,
  RPC_URL,
  ETHERSCAN_API_KEY,
} = process.env;
