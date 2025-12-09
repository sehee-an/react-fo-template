import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div 
      className={`
        bg-white border border-gray-200 rounded-lg p-4 shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
};