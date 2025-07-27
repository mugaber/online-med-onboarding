interface PrimaryButtonProps {
  children: React.ReactNode;
  label: string;
}

export default function PrimaryButton({ children, label }: PrimaryButtonProps) {
  return (
    <button
      className="bg-primary px-5 py-3 rounded-lg font-semibold text-[17px] leading-6
        hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary
        focus:ring-offset-2 transition-colors cursor-pointer"
      role="button"
      aria-label={label}
    >
      {children}
    </button>
  );
}
