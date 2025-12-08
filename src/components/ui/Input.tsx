import React, { useId } from "react";

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({label, error, id, className = "", ...props}: InputProps) {
  const reactId = useId();

  const inputId = id ?? `input-${reactId}`;
  const errorId = `${reactId}-error`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        id={inputId}
        className={`
          border rounded-md px-3 py-2
          focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
          ${className}
        `}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />

      {error && (
        <p id={errorId} className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};