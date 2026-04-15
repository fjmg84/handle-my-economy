import Link from "next/link";
import { PropsWithChildren, ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  link?: string;
  icon?: ReactNode;
}

function Card({
  title,
  description,
  link,
  icon,
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <Link
      href={link || "#"}
      className="card hover:shadow-lg transition-shadow border border-[#4f46e5] rounded-lg p-6  flex items-start gap-4 flex-col hover:shadow-[#4f46e5]/20 w-full h-full"
    >
      {icon && <div className="bg-gray-100 p-4 rounded-md">{icon}</div>}

      <div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
      {children}
    </Link>
  );
}

export default Card;
