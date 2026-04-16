interface ChipsProps {
  text: string;
  color: string;
}

function Chips({ text, color }: ChipsProps) {
  return (
    <div className="flex gap-2">
      <span className={`px-3 py-1 ${color} rounded-full text-xs font-medium`}>
        {text}
      </span>
    </div>
  );
}

export default Chips;
