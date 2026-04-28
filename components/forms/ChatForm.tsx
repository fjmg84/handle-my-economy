"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import MessageHistory, { MessageHistoryProps } from "../shares/MessageHistory";

function ChatForm() {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<MessageHistoryProps[]>([]);

  const handleSubmit = async () => {
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: inputValue,
        timestamp: new Date().toISOString(),
      },
    ]);

    const messageContent = messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    try {
      const response = await fetch("/api/v1/ia-asistent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: [...messageContent, { role: "user", content: inputValue }],
        }),
      });

      const data = await response.json();
      console.log("Respuesta completa:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content: data.response,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      console.error("Error al enviar solicitud a IA Asistente:", error);
      return;
    } finally {
      setLoading(false);
      setInputValue("");
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col items-start gap-2 w-full">
        <p className="text-gray-600 mb-6">
          Pregúntale a tu asistente sobre el estado de tus finanzas personales,
          consejos de ahorro, o cualquier otra consulta relacionada.
        </p>
        <MessageHistory messages={messages} />
      </div>

      <div className="flex w-full gap-4">
        <input
          type="text"
          placeholder="Escribe tu pregunta..."
          className="w-full p-3 border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white rounded-full p-5 hover:bg-indigo-700 transition-colors hover:cursor-pointer"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Enviando..." : <Send />}
        </button>
      </div>
    </div>
  );
}

export default ChatForm;
