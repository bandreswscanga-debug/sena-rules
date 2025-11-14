import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search" className="sr-only">Buscar normas</label>
      <input
        id="search"
        aria-label="Buscar normas"
        placeholder="Buscar por título, categoría o texto..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 rounded border"
      />
    </div>
  );
}