import React from "react";

export default function ProgressBar({ percent = 0 }) {
  return (
    <div aria-label="Progreso de cumplimiento" className="w-full">
      <div className="w-full bg-slate-200 rounded h-3 overflow-hidden">
        <div
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${percent}%`, height: "100%" }}
          className="bg-green-400"
        />
      </div>
      <div className="text-xs mt-1">{percent}% completado</div>
    </div>
  );
}