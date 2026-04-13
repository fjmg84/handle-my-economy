'use client';

export default function IconComponent({
  children,
  color = '#000',
  sizeX = 24,
  sizeY = 24,
}: {
  children: React.ReactNode;
  color?: string;
  sizeX?: number;
  sizeY?: number;
}) {
  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color }}
    >
      {children}
    </svg>
  );
}
