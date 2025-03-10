import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "KineticAI", // Unique app ID
  name: "KineticAI",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
