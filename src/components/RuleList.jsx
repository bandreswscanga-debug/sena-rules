import React from "react";
import RuleCard from "./RuleCard";

export default function RuleList({ rules, complianceMap, onToggleCompliance }) {
  if (!rules || rules.length === 0) {
    return <div className="p-4 card">No hay resultados para tu búsqueda.</div>;
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-4">
      {rules.map((r) => (
        <RuleCard
          key={r.id}
          rule={r}
          compliant={!!complianceMap[r.id]}
          onToggle={() => onToggleCompliance(r.id)}
        />
      ))}
    </div>
  );
}