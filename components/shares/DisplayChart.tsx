import { ReactNode } from "react";

function DisplayChart({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-indigo-50 p-10 flex flex-col gap-4">
      {children}
    </div>
  );
}

export default DisplayChart;
