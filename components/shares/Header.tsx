interface HeadersProps {
  title: string;
  description?: string;
  color?: "dark" | "light";
}

function Headers({ title, description, color = "dark" }: HeadersProps) {
  return (
    <div
      id="headers"
      className={color === "light" ? "text-white" : "text-gray-900"}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p
          className={`text-base mt-1 ${color === "light" ? "text-gray-300" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default Headers;
