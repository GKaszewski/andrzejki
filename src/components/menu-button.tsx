const MenuButton = ({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`w-full p-4 rounded-xl border border-white/10 text-left text-lg font-medium transition-all
      ${
        disabled
          ? "opacity-50 cursor-not-allowed bg-slate-800 text-gray-500"
          : "bg-white/5 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
      }`}
  >
    {label}
  </button>
);

export default MenuButton;
