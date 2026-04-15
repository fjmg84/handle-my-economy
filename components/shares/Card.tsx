import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

function Card({ title, description, link, icon }: CardProps) {
  return (
    <Link
      href={link}
      // Agrega el shadow de color btn-primary al hacer hover
      className="card hover:shadow-lg transition-shadow border border-[#4f46e5] rounded-lg p-6  flex items-start gap-4 flex-col hover:shadow-[#4f46e5]/20"
    >
      <div className="bg-gray-100 p-4 rounded-md">{icon}</div>

      <div>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

export default Card;
