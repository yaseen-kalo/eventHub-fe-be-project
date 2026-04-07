import envdot from "dotenv";

envdot.config();

export const env = {
  baseUrl:
    process.env.BASE_URL || "https://eventhub.rahulshettyacademy.com/login",
  apiBaseUrl:
    process.env.API_BASE_URL ||
    "https://api.eventhub.rahulshettyacademy.com/api/docs/",
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};
