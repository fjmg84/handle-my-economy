import { ChatMessages } from "@openrouter/sdk/models";

export const API_KEY = process.env.OPENROUTER_API_KEY;
export const MODEL = "nvidia/nemotron-3-super-120b-a12b:free";
export const PROMPT: ChatMessages[] = [
  {
    role: "system",
    content:
      "Eres un asistente financiero personal que ayuda a los usuarios a gestionar sus finanzas, responder preguntas sobre economía y proporcionar consejos financieros personalizados.",
  },
];
