import Link from "next/link";
import { fakultas } from "@/data/fakultas";

export default function FacultyDirectoryPage() {
  return (
    <main className="faculty-page">
      <div className="faculty-container">
        <p className="faculty-eyebrow">FACULTIES</p>
        <h1>Kenali Fakultas di UI</h1>
        <p className="faculty-lead">Jelajahi informasi fakultas, budaya, program studi, pencapaian, dan prospek karier.</p>

        {fakultas.length === 0 ? (
          <div className="faculty-empty">
            <strong>Informasi fakultas belum ditambahkan.</strong>
            <p>Isi data fakultas di src/data/fakultas.ts. Halaman detail akan dibuat berdasarkan slug masing-masing fakultas.</p>
          </div>
        ) : (
          <div className="faculty-grid">
            {fakultas.map((faculty) => (
              <article className="faculty-card" key={faculty.slug}>
                <p className="faculty-abbreviation">{faculty.singkatan}</p>
                <h2>{faculty.nama}</h2>
                <p>{faculty.deskripsi || "Deskripsi fakultas akan segera ditambahkan."}</p>
                <Link href={"/fakultas/" + faculty.slug}>Lihat fakultas →</Link>
              </article>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .faculty-container { max-width: 1080px; margin: auto; padding: 56px 24px 80px; min-height: 55vh; }
        .faculty-eyebrow, .faculty-abbreviation { color: #e66d7c; font-size: 12px; font-weight: 800; letter-spacing: .18em; }
        h1 { margin: 8px 0 14px; font: 800 clamp(34px, 5vw, 52px) Manrope, sans-serif; color: #17213a; }
        .faculty-lead { max-width: 760px; color: #69738a; font-size: 17px; line-height: 1.8; }
        .faculty-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 30px; }
        .faculty-card, .faculty-empty { padding: 24px; background: white; border: 1px solid #e9ebf1; border-radius: 16px; }
        .faculty-card h2 { margin: 8px 0; font: 800 20px Manrope, sans-serif; }
        .faculty-card > p:not(.faculty-abbreviation), .faculty-empty p { color: #69738a; line-height: 1.7; }
        .faculty-card a { display: inline-block; margin-top: 14px; color: #173f8f; font-weight: 700; }
        .faculty-empty { margin-top: 28px; text-align: center; }
        @media (max-width: 760px) { .faculty-container { padding: 44px 20px 64px; } .faculty-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}