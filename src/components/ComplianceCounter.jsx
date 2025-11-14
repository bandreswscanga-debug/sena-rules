import React from "react";

export default function ComplianceCounter({ completed, total }) {
  return (
    <div className="card p-2 inline-flex items-center gap-3">
      <div>
        <strong>{completed}</strong> / {total}
      </div>
      <div className="text-xs text-slate-500">normas cumplidas</div>
    </div>
  );
}