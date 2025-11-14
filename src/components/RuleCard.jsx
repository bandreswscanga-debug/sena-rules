import React from "react";

export default function RuleCard({ rule, compliant, onToggle }) {
  return (
    <article className="card p-4">
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{rule.title}</h3>
          <p className="text-xs text-slate-500">{rule.category}</p>
        </div>
        <div>
          <button
            onClick={onToggle}
            aria-pressed={!!compliant}
            aria-label={compliant ? `Marcar ${rule.title} como pendiente` : `Marcar ${rule.title} como cumplida`}
            className={`px-3 py-1 rounded ${
              compliant ? "bg-green-100 border border-green-400" : "bg-slate-100 border"
            }`}
          >
            {compliant ? "Compliant ✅" : "Marcar"}
          </button>
        </div>
      </header>

      <p className="mt-3 text-sm">{rule.description}</p>

      {/* composición flexible: slot para notas o tips */}
      <div className="mt-3 text-xs text-slate-600">
        <strong>Tip:</strong> Mantén siempre tu carné visible en la jornada.
      </div>
    </article>
  );
  }