import { ChatMessages } from "@openrouter/sdk/models";
import { BotMessageSquare, User2 } from "lucide-react";

export type MessageHistoryProps = ChatMessages & {
  timestamp: string;
};

function formattedTimestamp(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function MessageHistory({ messages }: { messages: MessageHistoryProps[] }) {
  return (
    <div className="flex flex-col w-full h-80 overflow-y-auto gap-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`w-full flex items-center gap-4 justify-start ${
            msg.role === "user" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className={`flex items-center justify-center p-5 rounded-full ${msg.role === "user" ? "bg-indigo-100" : "bg-gray-100"}`}
          >
            {msg.role === "user" ? (
              <User2 size={30} color="#4f46e5" />
            ) : (
              <BotMessageSquare size={30} color="gray" />
            )}
          </div>

          <div
            className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`p-4 rounded-md mb-2 w-full max-w-200 flex ${
                msg.role === "user" ? "bg-indigo-100" : "bg-gray-100"
              }`}
            >
              {msg.content}
            </div>
            <p className="text-gray-500 text-xs">
              {formattedTimestamp(msg.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageHistory;
