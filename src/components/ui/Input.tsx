import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export function Input({
  isError = false,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full rounded-md border px-3 py-2 outline-none transition focus:ring-2 ${
        isError
          ? "border-red-500 focus:ring-red-300"
          : "border-gray-300 focus:border-blue-500 focus:ring-blue-300"
      } ${className}`}
      {...props}
    />
  );
}
