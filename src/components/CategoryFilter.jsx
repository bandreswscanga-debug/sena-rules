import React from "react";

export default function CategoryFilter({ categories, value, onChange }) {
  return (
    <div>
      <label htmlFor="category" className="block text-sm">Filtrar por categoría</label>
      <select
        id="category"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Filtrar por categoria"
        className="w-full p-2 rounded border mt-1"
      >
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}