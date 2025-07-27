interface SecondaryButtonProps {
  children: React.ReactNode;
  label: string;
}

export default function SecondaryButton({
  children,
  label,
}: SecondaryButtonProps) {
  return (
    <button
      className="flex items-center gap-2 text-primary font-semibold text-[17px]
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        leading-7 rounded-md pl-1 pr-2 py-2 cursor-pointer"
      role="button"
      aria-label={label}
    >
      {children}
    </button>
  );
}
