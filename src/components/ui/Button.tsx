import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  // Base style untuk semua button
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-bold rounded-sm transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

  // Varian warna (efek neon-glow & brightness-110 sudah dihapus agar warna tidak menyala)
  const variants = {
    primary:
      "bg-[var(--accent-neon)] text-black border-none",
    outline:
      "border border-[var(--border-color)] bg-[var(--bg-card)]/80 text-slate-200 hover:bg-[var(--bg-card)] hover:text-[var(--accent-neon)] hover:border-[var(--accent-neon)] backdrop-blur-md active:scale-95",
    whatsapp:
      "bg-[var(--accent-neon)] text-black border-none",
    ghost:
      "bg-transparent text-slate-300 hover:text-[var(--accent-neon)] hover:bg-[var(--bg-card)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};