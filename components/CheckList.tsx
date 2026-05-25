"use client";

type CheckListProps = {
  items: string[];
  color?: string; // accent couleur (défaut violet brand)
};

export default function CheckList({ items, color = "#6952E6" }: CheckListProps) {
  const soft = `color-mix(in srgb, ${color} 10%, white)`;

  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-700">
          <span
            className="mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0"
            style={{ background: soft }}
          >
            <svg
              className="w-2.5 h-2.5"
              fill="none"
              stroke={color}
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
