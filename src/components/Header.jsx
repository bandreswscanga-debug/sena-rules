import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <header className="mb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-slate-600">{subtitle}</p>
    </header>
  );
}