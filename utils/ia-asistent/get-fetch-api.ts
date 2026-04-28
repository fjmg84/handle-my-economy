import { OpenRouter } from "@openrouter/sdk";
import { API_KEY, MODEL, PROMPT } from "./constants";
import { ChatMessages } from "@openrouter/sdk/models";

async function getFetchApi(prompt: ChatMessages[]) {
  if (!API_KEY) {
    throw new Error("OPENROUTER_API_KEY no esta configurada.");
  }

  const openrouter = new OpenRouter({
    apiKey: API_KEY,
  });

  const messages: ChatMessages[] = [
    ...PROMPT,
    ...prompt,
  ];

  try {
    // Stream the response to get reasoning tokens in usage
    const stream = await openrouter.chat.send({
      chatRequest: {
        model: MODEL,
        messages,
        stream: true,
      },
    });

    let response = "";
    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        response += content;
        process.stdout.write(content);
      }

      // Usage information comes in the final chunk
      if (chunk.usage) {
        console.log("\nReasoning tokens:", chunk.usage);
      }
    }

    return response;
  } catch (error) {
    console.error("Error al enviar solicitud a OpenRouter:", error);
    throw error;
  }
}

export default getFetchApi;
