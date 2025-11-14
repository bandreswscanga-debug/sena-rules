import React, { useState, useMemo } from "react";
import rulesData from "./data/rules";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RuleList from "./components/RuleList";
import ComplianceCounter from "./components/ComplianceCounter";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  // track cumplimiento global por id -> boolean
  const [complianceMap, setComplianceMap] = useState({});

  // togglear cumplimiento
  const toggleCompliance = (id) => {
    setComplianceMap((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      return next;
    });
  };

  // lista filtrada (texto y categoría)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rulesData.filter((r) => {
      const matchesCategory = category === "All" || r.category === category;
      const matchesText =
        r.title.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);
      return matchesCategory && (q === "" || matchesText);
    });
  }, [query, category]);

  const total = rulesData.length;
  const completed = Object.values(complianceMap).filter(Boolean).length;
  const percent = Math.round((completed / total) * 100);

  const categories = ["All", ...Array.from(new Set(rulesData.map((r) => r.category)))];

  return (
    <div className="container mx-auto p-4">
      <Header title="SENA Rules — Build & Play" subtitle="Normas básicas del aprendiz" />
      <div className="my-4 grid gap-4 sm:grid-cols-2">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter categories={categories} value={category} onChange={setCategory} />
      </div>

      <div className="my-4 flex items-center gap-4">
        <ComplianceCounter completed={completed} total={total} />
        <div className="flex-1"><ProgressBar percent={percent} /></div>
      </div>

      <RuleList
        rules={filtered}
        complianceMap={complianceMap}
        onToggleCompliance={toggleCompliance}
      />

      <Footer />
    </div>
  );
}