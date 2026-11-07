"use client";

import { useMemo, useState } from "react";
import { alumni } from "@/data/alumni";

export default function AlumniPage() {
  const [search, setSearch] = useState("");
  const filteredAlumni = useMemo(() => alumni.filter((person) =>
    [person.nama, person.programStudi, person.fakultasSlug, String(person.tahunMasukUI)]
      .join(" ").toLowerCase().includes(search.toLowerCase())
  ), [search]);

  return (
    <main className="alumni-page">
      <div className="alumni-container">
        <p className="alumni-eyebrow">DIRECTORY</p>
        <h1>Direktori Alumni</h1>
        <p className="alumni-lead">Kenali alumni SMAN 8 Jakarta yang melanjutkan studi di Universitas Indonesia.</p>

        <label className="search-label" htmlFor="alumni-search">Cari alumni</label>
        <input id="alumni-search" className="alumni-search" placeholder="Cari nama, fakultas, atau program studi..." value={search} onChange={(event) => setSearch(event.target.value)} />

        {filteredAlumni.length === 0 ? (
          <div className="alumni-empty">
            <strong>{search ? "Belum ada hasil pencarian." : "Data alumni belum ditambahkan."}</strong>
            <p>{search ? "Coba kata kunci lain." : "Tambahkan profil alumni melalui file src/data/alumni.ts."}</p>
          </div>
        ) : (
          <div className="alumni-grid">
            {filteredAlumni.map((person) => (
              <article className="alumni-card" key={person.id}>
                <h2>{person.nama}</h2>
                <p>{person.programStudi}</p>
                <p>{person.fakultasSlug} · Angkatan UI {person.tahunMasukUI}</p>
                <span>Jalur: {person.jalurSeleksi}</span>
                {person.bio && <p className="alumni-bio">{person.bio}</p>}
              </article>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .alumni-container { max-width: 1080px; margin: auto; padding: 56px 24px 80px; min-height: 55vh; }
        .alumni-eyebrow { color: #e66d7c; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
        h1 { margin: 8px 0 14px; font: 800 clamp(34px, 5vw, 52px) Manrope, sans-serif; color: #17213a; }
        .alumni-lead { max-width: 760px; color: #69738a; font-size: 17px; line-height: 1.8; }
        .search-label { display: block; margin: 26px 0 8px; font-weight: 700; }
        .alumni-search { width: 100%; padding: 14px 16px; border: 1px solid #dce0e9; border-radius: 10px; font: inherit; background: white; }
        .alumni-empty { margin-top: 24px; padding: 34px; border: 1px dashed #cbd1df; border-radius: 14px; text-align: center; background: white; }
        .alumni-empty p { color: #69738a; }
        .alumni-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 24px; }
        .alumni-card { padding: 20px; background: white; border: 1px solid #e8eaf0; border-radius: 12px; }
        .alumni-card h2 { margin: 0 0 8px; font: 800 18px Manrope, sans-serif; }
        .alumni-card p, .alumni-card span { display: block; margin: 5px 0; color: #69738a; font-size: 14px; line-height: 1.6; }
        .alumni-bio { margin-top: 12px !important; }
        @media (max-width: 760px) { .alumni-container { padding: 44px 20px 64px; } .alumni-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}